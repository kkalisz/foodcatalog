'use client';

type Props = {
  labels: {
    title: string;
    subtitle: string;
    name_label: string;
    name_placeholder: string;
    email_label: string;
    email_placeholder: string;
    subject_label: string;
    subject_placeholder: string;
    message_label: string;
    message_placeholder: string;
    submit: string;
  };
};

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100';

const ContactForm = ({ labels }: Props) => {
  return (
    <div>
      <h2 className="mb-1 text-xl font-bold text-gray-900">{labels.title}</h2>
      <p className="mb-6 text-sm text-gray-500">{labels.subtitle}</p>

      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              {labels.name_label}
            </label>
            <input type="text" placeholder={labels.name_placeholder} className={inputClass} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              {labels.email_label}
            </label>
            <input type="email" placeholder={labels.email_placeholder} className={inputClass} />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            {labels.subject_label}
          </label>
          <input type="text" placeholder={labels.subject_placeholder} className={inputClass} />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            {labels.message_label}
          </label>
          <textarea
            rows={5}
            placeholder={labels.message_placeholder}
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
        >
          {labels.submit}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
