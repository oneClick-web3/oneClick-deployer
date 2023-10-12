import { useState } from 'react';
import { resolveLink } from '@/utils';


function SuccessAlert({
    network, 
    contractAddress,
    txHash,
    setSuccessAlert,
    type,
} : {
    network?: number,
    contractAddress?: string,
    txHash?: string,
    setSuccessAlert:any,
    type?: 'deploy' | 'unlock'
}
) {
  const [visible, setVisible] = useState(true);
  
  if (!visible) return null;

  // const url = "https://etherscan.io/";
  const url = resolveLink(network, type, contractAddress, txHash);

  const deploy = type === 'deploy';
  const unlock = type === 'unlock'

  const handleClose = () => {
    setVisible(false);
    setSuccessAlert(false);
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-black border-4 border-green-400 p-4 rounded flex items-center space-x-2">
      <span className="text-white font-medium font-mono">{deploy? "deployment" : unlock? "unlocking" : "tx"} successful!</span>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-300 hover:text-blue-500 hover:underline font-mono"
      >
        see {deploy? "contract" : "tx"} on explorer.
      </a>
      <button onClick={handleClose} className="bg-black hover:bg-green-400 rounded p-1 focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default SuccessAlert;
