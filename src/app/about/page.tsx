export default function About() {
    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="mb-4">
          I &apos; m [Your Name], a [Your Age]-year-old [Your Profession] based in [Your Location]. I&apos;m passionate about [Your Interests] and always eager to learn new technologies.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Education</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>[Your Degree] in [Your Major] from [University Name] (Year)</li>
          {/* Add more education items as needed */}
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Hobbies & Interests</h2>
        <ul className="list-disc pl-6">
          <li>[Hobby 1]</li>
          <li>[Hobby 2]</li>
          <li>[Hobby 3]</li>
        </ul>
      </div>
    )
  }