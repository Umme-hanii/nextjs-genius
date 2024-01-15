import Link from "next/link";

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content max-w-5xl mockup-window border bg-neutral text-secondary">
        <div className="max-w-md">
          <div className="flex justify-center flex-col px-4 py-16 bg-base-200">
            <h1 className="text-5xl font-bold text-primary">Next Genius</h1>

            <p className="py-6 text-lg leading-loose text-base-content">
              Next Genius: Your AI language companion. Powered by OpenAI, it
              enhances your conversations, content creation, and more!
            </p>

            <Link href="/sign-in" className="btn btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
