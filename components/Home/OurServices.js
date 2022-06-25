import {
    ChatAltIcon,
    DocumentReportIcon,
    HeartIcon,
    InboxIcon,
    PencilAltIcon,
    ReplyIcon,
    TrashIcon,
    UsersIcon,
  } from '@heroicons/react/outline'
  
  const features = [
    {
      name: 'Investor Pitch Deck ',
      description: 'End-to-end investor pitch creation service for seed to series-A stage. We also develop investor decks for demo day, accelerators, and startup competitions.',
      icon: InboxIcon,
    },
    {
      name: 'Business Plan',
      description: 'We offer professional business plan writing service for entrepreneurs who require bank loan or grants.  ',
      icon: UsersIcon,
    },
    {
      name: 'Startup Valuation',
      description: 'Valuation service to startups seeking capital from venture capitalists or angel investors. We also offer this service for businesses seeking valuation for sale/acquisition/exit. ',
      icon: TrashIcon,
    },
    {
      name: 'Financial Modelling',
      description: 'Bespoke financial modelling and forecasting services for startups, management consultants, and boutique investment banks/advisors.',
      icon: PencilAltIcon,
    },
    {
      name: 'Presentation Design',
      description: 'Professional presentation design service for executives who want to save time and make a mark. ',
      icon: DocumentReportIcon,
    },
    {
      name: 'Sales Presentation',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ReplyIcon,
    },
    {
      name: 'Investment Research',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ChatAltIcon,
    },
    {
      name: 'Strategic Content ',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: HeartIcon,
    },
  ]
  
  export default function OurServices() {
    return (
      <div className="bg-indigo-700">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Our Services</h2>
          <p className="mt-4 max-w-3xl text-lg text-indigo-200">
          Our services are carefully aligned to the dynamic needs of startups, SMBs, and growing firms.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name}>
                <div>
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                  <p className="mt-2 text-base text-indigo-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }