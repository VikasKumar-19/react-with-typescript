import React from 'react'
import LocalstorageHook from '../components/LocalStorageHook';
import ToggleHook from '../components/ToggleHook';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLogger } from '../hooks/useLogger';

const CustomHooks = () => {

  useDocumentTitle("Custom Hooks")
  useLogger("Custom Hook", "log statement from CustomHook component")

  return (
    <div>
      customHooks
      <LocalstorageHook />
      <hr />
      <ToggleHook />
    </div>
  )
}

export default CustomHooks;