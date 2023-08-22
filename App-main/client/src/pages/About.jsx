import React from 'react'

function About() {
  return (
    <div>
      {/* The Hero Section */}
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Maximize Your Productivity and Stay Focused
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              myTaskList is for the doers. The people who get things done.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/signup"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Learn More */}
        <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Work smarter, not harder</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Time-stamped task creation</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Breaking down your day-to-day into time-stamped tasks not only help make the day bearable but you become accountable to get time-crucial tasks done ASAP.
              </p>
            </div>
          </div>
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Stress Less</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Task prioritization</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Create timestamped tasks that will keep track of when you started and once you're finished you can delete them.
              </p>
            </div>
          </div>
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Mission Accomplished</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Task completion</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Take control of your workload and accomplish more in less time with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default About