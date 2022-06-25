
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Stay focused',
    description: 'We take care of end-to-end pitch deck development, leaving you with more time to focus your efforts on shipping new features and growing your business.',
    icon: CloudUploadIcon,
  },
  {
    name: 'Quality assurance',
    description: 'Decks are crafted by experienced analyst team',
    icon: LockClosedIcon,
  },
  {
    name: 'Saas research experience',
    description: 'We’ve spent over 1,000 hours doing investment research & analysis for PE/VC firms active in SaaS space',
    icon: RefreshIcon,
  },
  {
    name: 'Impressive clarity',
    description: 'We ensure that the business plan / pitch deck demonstrates clarity in purpose and business model',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Robust investment thesis',
    description: 'Compelling storyline and strong investment thesis packed together to generate a well rounded impression',
    icon: CogIcon,
  },
 
]



export default function Features() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      Why choose AlphaValley for crafting your SaaS Pitch Deck?
      </p>
      <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
        Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
        malesuada. Eleifend condimentum id viverra nulla.
      </p>
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div className="flow-root rounded-lg bg-gray-50 h-full px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                  <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}
