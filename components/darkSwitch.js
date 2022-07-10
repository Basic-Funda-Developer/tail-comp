import { useState,React } from 'react'
import { Switch } from '@headlessui/react'

const darkSwitch= ()=> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [enabled, setEnabled] = useState(false)

  return (
    <>
    <Switch.Group>
    <div className="flex items-center">
        <Switch.Label>Enable Dark Mode</Switch.Label>
    <Switch
      checked={enabled}
      onChange={setEnabled}
      value=""
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white`}
      />
    </Switch>
    </div>
    </Switch.Group> 
    </>
  )
}
export default darkSwitch