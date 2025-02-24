export default function Products() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center">Our AI Solutions</h1>
      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold">F.R.I.D.A.Y (AI Chatbot)</h2>
          <p className="mt-4">
            F.R.I.D.A.Y is an AI-driven chatbot designed to assist users with a variety of tasks.
          </p>
          <button className="mt-4 bg-blue-500 px-6 py-2 rounded-lg">
            Try F.R.I.D.A.Y Now
          </button>
        </section>
        <section>
          <h2 className="text-2xl font-bold">QuickTap AI</h2>
          <p className="mt-4">
            QuickTap AI is a powerful suite of AI tools for image generation, content writing, and more.
          </p>
          <button className="mt-4 bg-green-500 px-6 py-2 rounded-lg">
            Explore QuickTap AI
          </button>
        </section>
      </div>
    </div>
  );
}