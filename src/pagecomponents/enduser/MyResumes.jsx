import React, { useEffect, useState } from 'react'
import Resume from './myresumecomp/Resume';

import { ref,uploadString } from 'firebase/storage'
import { firebasestorage } from '../../firebase/config';

function MyResumes( ) {
  
  const [ resumelist, setReusmeList ] = useState([]);

  const storageref = ref(firebasestorage, 'file1.png')


  async function convertFile(event) {
    event.preventDefault();

    try {
        const form = event.target;
        const formData = new FormData(form);

        const response = await fetch(form.action, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Error occurred while converting the file.');
        }

        const responseData = await response.json(); 

        const string = responseData.Files[0].FileData;

          uploadString(storageref, string).then((snapshot) => {
            console.log('Uploaded a raw string!');
          });


    } catch (error) {
        alert(error.message);
    }
}


  //async useeffect call at mount
  useEffect( () => {
    
    const fetchResumes = async () => {
      const response = await fetch(/* someapicall/resumes */);
      const data = await response.json();

      setReusmeList(data);
    }
    //fetchResumes();

  }, [])

  return (
    <div>
      <form onSubmit={convertFile} action="https://v2.convertapi.com/convert/pdf/to/png?Secret=vZxMQThWO2YNSI9g" method="post" encType="multipart/form-data">
                <input type="file" name="File" />
                <button type="submit">Convert file</button>
            </form>
      {
        
        resumelist.map((resume) => {
 
          return <Resume resume={resume} />

        })
      }

      {/* upload resume btn */}

    </div>
  )
}

export default MyResumes