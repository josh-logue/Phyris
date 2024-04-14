import { useEffect, useState } from 'react';
import { saveNote } from '../utils';

function Note(props: any) {
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);
  return (
    <div>
      <div>
        <textarea
          className="note"
          rows={4}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            saveNote(props.thing, value);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Note;
