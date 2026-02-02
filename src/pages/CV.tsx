import { Button } from '../components/common';
import { cvData } from '../data/cv';

export function CV() {
  const formatDate = (date: string) => {
    if (date === 'Present') return date;
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return month ? `${monthNames[parseInt(month) - 1]} ${year}` : year;
  };

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">YJ Lee</h1>
              <p className="text-xl text-gray-600">Backend Engineer</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button href="/assets/resume.pdf" external variant="outline">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download PDF
              </Button>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
            <p className="text-gray-600 leading-relaxed">{cvData.summary}</p>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
            <div className="space-y-8">
              {cvData.experience.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-gray-200">
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-blue-600" />
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-gray-600">
                      <span className="font-medium">{exp.company}</span>
                      <span>·</span>
                      <span>{exp.location}</span>
                      <span>·</span>
                      <span>
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 mb-3">
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  {exp.techStack && (
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cvData.skills.map((skill) => (
                <div key={skill.category}>
                  <h3 className="font-semibold text-gray-900 mb-2">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="space-y-4">
              {cvData.education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                  <div className="text-gray-600">
                    <span className="font-medium">{edu.institution}</span>
                    <span className="mx-2">·</span>
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                  {edu.description && <p className="text-gray-500 mt-1">{edu.description}</p>}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
