export default function TechnicalBackground() {
    const skills = [
      { category: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'Python'] },
      { category: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'Django'] },
      { category: 'Databases', items: ['MongoDB', 'PostgreSQL'] },
      { category: 'Tools & Others', items: ['Git', 'Docker', 'AWS'] },
    ]
  
    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Technical Background</h1>
        <p className="mb-6">
          With [X] years of experience in software development, I&apos;ve worked with a variety of technologies and frameworks. Here&apos;s an overview of my technical skills:
        </p>
        {skills.map((skillSet) => (
          <div key={skillSet.category} className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">{skillSet.category}</h2>
            <ul className="list-disc pl-6">
              {skillSet.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }