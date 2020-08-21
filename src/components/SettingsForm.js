
import React, { useContext } from 'react';
import { SettingsContext } from '../App' ;

const SettingsForm = ({onSubmit}) => {
  const {settings, saveSettings} = useContext(SettingsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    saveSettings({...settings, [name]: value})
  }

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="fontSize">Font Size</label>
        <input
          onChange={handleChange}
          value={settings.fontSize}
          name="fontSize"
          type="text"
          className="form-control"
          id="fontSize"
          placeholder="17" />
      </div>
      <div className="mb-3">
        <label htmlFor="theme">Theme</label>
        <select
          onChange={handleChange}
          className="form-control"
          name="theme"
          value={settings.theme}
          id="theme">
          <option value='dark'>Dark</option>
          <option value='light'>Light</option>
        </select>
      </div>
      <button
        onClick={() => onSubmit(settings)}
        className="btn btn-primary btn-lg btn-block"
        type="button">Save</button>
    </form>
  )
}

export default SettingsForm;
