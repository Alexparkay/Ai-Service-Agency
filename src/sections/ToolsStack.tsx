import Carousel from '@/components/Carousel';
import Reveal from '@/components/Reveal';

const stacks = [
  { type: 'Lead Gen', tools: ['Apollo', 'Clay', 'OpenAI', 'Airflow'] },
  { type: 'Content Ops', tools: ['Notion', 'Whisper', 'GPT-4o', 'S3'] },
  { type: 'Support', tools: ['Zendesk', 'RAG', 'Pinecone', 'Functions'] },
  { type: 'Sales', tools: ['HubSpot', 'Call Summaries', 'Q&A', 'Email Assist'] },
  { type: 'Data Ops', tools: ['dbt', 'Snowflake', 'Agents', 'Dashboards'] },
];

export default function ToolsStack() {
  return (
    <section className="section">
      <Reveal>
        <h2 className="headline text-3xl md:text-5xl">Tools & Tech Stack</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-6">
          <Carousel>
            {stacks.map((s) => (
              <div key={s.type} className="card p-6">
                <div className="text-xl font-semibold">{s.type}</div>
                <div className="divider" />
                <div className="flex flex-wrap gap-2">
                  {s.tools.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/10 text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
          <div className="mt-8">
            <a
              className="btn"
              href="https://alexkaymakanov.beehiiv.com/"
              target="_blank"
              rel="noreferrer"
            >
              Download ASA Starter Stack
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}


