
import { Toast,ToastHeader, ToastBody } from "bootstrap";

export default function Toaste() {
    return (
        <div
         aria-live="polite"
         aria-atomic="true"
         style={{
          position: 'absolute',
          minHeight: '100px',
         }}
        >
         <Toast
          style={{
           position: 'fixed',
           top: 0,
           right: 0,
          }}
         >
          <Toast.Header>
           <strong className="mr-auto">"title"</strong>
      
          </Toast.Header>
          <Toast.Body>"content"</Toast.Body>
         </Toast>
        </div>
       );
      }