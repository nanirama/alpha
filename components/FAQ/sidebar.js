const tabs = [
    { name: 'My Account', href: '#', current: true },
    { name: 'Company', href: '#', current: false },
    { name: 'Team Members', href: '#', current: false },
    { name: 'Billing', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  export default function Sidebar({data, catChangeHandler, catIndex}) {
    const selectHandleChange = (e)=>{
      catChangeHandler(e.target.value)
    }
    
    return (
      <div>
        <div className="md:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full focus:ring-indigo-500 focus:border-indigo-500 mx-0 border p-2 mb-10 rounded-md capitalize mb-3"
            defaultValue={catIndex}
            onChange={(e) => selectHandleChange(e)}
          >
            <option className="mb-3" value="all">View All</option>
                        {data && data.map((item, index) => (
                            <option  key={index} value={item.attributes.slug}>{item.attributes.name}</option>
                        ))}
          </select>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col border rounded-lg" aria-label="Tabs">
          <button
                onClick={()=>catChangeHandler('all')}
                className={catIndex  === 'all' ? `py-3 font-semibold text-lg px-5 border-b text-left bg-gray-50 rounded-t-lg` : `py-3 font-medium text-lg px-5 text-left border-b hover:bg-gray-50 hover:font-semibold` }
              >
                View All
              </button>
              {data && data.map((item, index)=>{
                return(
                  <button
                    onClick={()=>catChangeHandler(item.attributes.slug)}
                    key={item.attributes.slug}
                    className={catIndex===item.attributes.slug ? `py-3 font-semibold text-lg px-5 border-b text-left bg-gray-50 rounded-t-lg` : `py-3 font-medium text-lg px-5 text-left border-b hover:bg-gray-50 hover:font-semibold` }
                    aria-current={'page'}
                  >
                  {item.attributes.name.charAt(0).toUpperCase() + item.attributes.name.slice(1)}
                </button> 
                ) 
              })}
           
          </div>
        </div>
      </div>
    )
  }