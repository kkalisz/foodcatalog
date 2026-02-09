import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    serverTimestamp,
    updateDoc,
    writeBatch,
} from "firebase/firestore"

import { db } from "./client"
import { generateSlug } from "@/lib/utils/slug"
import { CreatePublicRestaurantForm } from "@/data/types/createPublicRestaurantForm"
import { PublicRestaurant } from "@/data/types/publicRestaurant"
import { useEffect, useState } from "react"
import { useAuth } from "@/providers/AuthContext"
import { Firm } from "@/data/types/firm"

export const createRestaurant = async (
    data: CreatePublicRestaurantForm,
    firmId: string) => {
    const restaurantId = crypto.randomUUID();
    const batch = writeBatch(db);

    const publicRef = doc(db, "public_restaurants", restaurantId);
    batch.set(publicRef, {
        ...data,
        firmId,
        status: "active",
        rating: 0,
        reviewsCount: 0,
        slug: generateSlug(data.name),
        createdAt: serverTimestamp(),
    })
    const firmRestaurantRef = doc(db, "firms", firmId, "restaurants", restaurantId);
    batch.set(firmRestaurantRef, {
        name: data.name,
        status: "active",
        slug: generateSlug(data.name),
        createdAt: serverTimestamp(),
    })
    const roleRef = doc(db, "firms", firmId, "restaurants", restaurantId, "roles", firmId);

    batch.set(roleRef, {
        role: "restaurant_admin",
        createdAt: serverTimestamp(),
    })
    await batch.commit();
    return restaurantId;
}

export const createPublicRestaurant = async (
    data: CreatePublicRestaurantForm,
    firmId: string
) => {
    return await addDoc(collection(db, "public_restaurants"), {
        name: data.name,
        city: data.city,
        street: data.street,
        postalCode: data.postalCode,
        phone: data.phone,
        category: data.category,
        shortDescription: data.shortDescription,
        coverImage: data.coverImage,
        delivery: data.delivery,
        firmId,
        slug: generateSlug(data.name),
        status: "draft",
        rating: 0,
        reviewsCount: 0,
        createdAt: serverTimestamp(),
    })
}

export const updatePublicRestaurant = async (
    restaurantId: string,
    data: CreatePublicRestaurantForm
) => {
    const ref = doc(db, "public_restaurants", restaurantId)

    await updateDoc(ref, {
        name: data.name,
        city: data.city,
        category: data.category,
        shortDescription: data.shortDescription,
        coverImage: data.coverImage,
        delivery: data.delivery,

        slug: generateSlug(data.name),
        updatedAt: serverTimestamp(),
    })
}
export const deletePublicRestaurant = async (restaurantId: string) => {
    const ref = doc(db, "public_restaurants", restaurantId)
    await deleteDoc(ref)
}
export const useFirm = () => {
    const { firmId } = useFirmId()
    const [firm, setFirm] = useState<Firm | null>(null)
    useEffect(() => {
        const loadFirm = async () => {
            if (!firmId) return
            const firmRef = doc(db, "firms", firmId)
            const snap = await getDoc(firmRef)
            if (snap.exists()) {
                setFirm(snap.data() as Firm)
            }
        }
        loadFirm()
    }, [firmId])
    return { firm }
}
export const useFirmId = (uid?: string | undefined) => {
    const { user } = useAuth()
    const [firmId, setFirmId] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadFirmId = async () => {
            if (!user) return

            if (!user?.uid) return
            const userRef = doc(db, "users", user.uid)
            const snap = await getDoc(userRef)

            if (snap.exists()) {
                setFirmId(snap.data().firmId)
            }

            setLoading(false)
        }

        loadFirmId()
    }, [user])

    return { firmId, loading }
}

export const getRestaurantById = async (
    restaurantId: string
): Promise<PublicRestaurant | null> => {
    const ref = doc(db, "public_restaurants", restaurantId)
    const snap = await getDoc(ref)

    if (!snap.exists()) return null

    return {
        id: snap.id,
        ...(snap.data() as Omit<PublicRestaurant, "id">),
    }
}
