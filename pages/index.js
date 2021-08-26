import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import TokenKing from '../build/contracts/TokenKing.json'
import HallOfKings from '../components/HallOfKings';

export default function Home() {
  const [message, setMessage] = useState('');
  const [account, setAccount] = useState('');
  const [claimPrice, setClaimPrice] = useState('0');
  const [kings, setKings] = useState([]);
  const [kingAlias, setKingAlias] = useState('');

  async function requestAccounts() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setMessage({
          message: 'Connected to Metamask',
          color: 'text-green-500'
        })
      } catch {
        setMessage({
          message: 'Failed to connect to Metamask',
          color: 'text-red-500'
        })
      }
    } else {
      setMessage({
        message: 'Please install Metamask in your browser',
        color: 'text-red-500'
      })
    }
  }

  const fetchClaimPrice = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, TokenKing.abi, provider);
      const claimPrice = await contract.currentClaimPrice();
      setClaimPrice(ethers.utils.formatEther(claimPrice))
    } catch (err) {
      console.log(err)
    }
  }

  const fetchKings = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, TokenKing.abi, provider);
      const kingsRaw = await contract.getKings();
      const kings = kingsRaw.map((king) => ({
        kingAddress: king.kingAddress,
        kingAlias: king.kingAlias,
        claimPrice: ethers.utils.formatEther(king.claimPrice),
        claimTime: new Date(king.claimTime.toNumber() * 1000).toISOString()
      })).reverse()
      setKings(kings)
    } catch (err) {
      console.log(err)
    }
  }

  const payClaimPrice = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, TokenKing.abi, signer);
      const tx = await contract.claimThrone(kingAlias, { value: ethers.utils.parseEther(claimPrice) })
      await tx.wait();
      setKingAlias('')
      fetchClaimPrice();
      fetchKings();
    } catch (err) {
      console.log(err)
    }
  }

  

  useEffect(() => {
    fetchClaimPrice();
    fetchKings();


    if (window.ethereum.selectedAddress) {
      setAccount(window.ethereum.selectedAddress)
      setMessage({
        message: 'Connected to Metamask',
        color: 'text-green-500'
      })
    }

    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length) {
        setAccount(accounts[0])
        setMessage({
          message: 'Connected to Metamask',
          color: 'text-green-500'
        })
      } else {
        setAccount('')
        setMessage('')
      }
    })

    ethereum.on('chainChanged', (_chainId) => window.location.reload());
  }, []);


  async function createGenesisKing() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, TokenKing.abi, signer);
    const tx = await contract.createGenesis({value: ethers.utils.parseEther("0.00001")});
    await tx.wait();
  }

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">Token King</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Make yourself immortal
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose your name and immortalize it on the Ethereum Blockchain!
          </p>
        </div>

        <div className="font-bold">
          {!account && <div className="mt-8 text-center">
            <button onClick={requestAccounts} type="button" className="text-lg inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Connect to Metamask
            </button>
          </div>}

          {message && <div className={`mt-8 text-center ${message.color}`}>
            {message.message}
          </div>}
        </div>

        <div className="text-center">{account}</div>

        {account.toLowerCase() == process.env.CONTRACT_OWNER.toLowerCase() && 
          <div className="font-bold">
            <div className="mt-8 text-center">
              <button onClick={createGenesisKing} type="button" className="text-lg inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Create Genesis King
              </button>
            </div>
          </div>
        }

        {account && 
          <div className="mt-4 max-w-xl mx-auto">
            <div className="mt-1 relative rounded-md shadow-sm">
              <input value={kingAlias} onInput={e => setKingAlias(e.target.value)} type="text" name="price" id="price" className="focus:ring-green-500 focus:border-green-500 block w-full px-5 border-gray-300 rounded-md" placeholder="Your Alias" />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button onClick={payClaimPrice} type="button" className="focus:ring-green-500 focus:border-green-500 h-full py-0 px-5 bg-green-500 text-lg font-bold hover:bg-green-700 text-white rounded-md">
                  Claim Throne ({claimPrice} ETH)
                </button>
              </div>
            </div>
          </div>
        }

        <div className="text-center mt-8 font-bold leading-8 text-gray-900">Current King: <span className="text-gray-500 font-bold">{kings.length ? `${kings[0].kingAlias} (${kings[0].kingAddress})` : '-'}</span></div>
        <div className="text-center mt-2 font-bold leading-8 text-gray-900">Current claim price: <span className="text-gray-500 font-bold">{claimPrice} ETH</span></div>
      </div>

      <div className="mt-16 text-center text-3xl">How does TokenKing work?</div>
      <div className="mt-8 mx-32">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                <svg className="h-8 w-8" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M10,7V9H12V17H14V7H10Z" />
                </svg>
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Becoming King</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Imagine the current claim price is 1.0 ETH. You want to become the new King, so you send 1.0 ETH to the contract. This will make you the new King and you are listed in the hall of Kings below. 
            </dd>
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                
              <svg className="h-8 w-8" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9,7V9H13V11H11A2,2 0 0,0 9,13V17H11L15,17V15H11V13H13A2,2 0 0,0 15,11V9A2,2 0 0,0 13,7H9Z" />
              </svg>
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Compensating the previous King</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              The 1.0 ETH will directly go (minus a small commission) to the previous King as compensation. After that the claim price will double so it will be at 2.0 ETH
            </dd>
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                
              <svg className="h-8 w-8" viewBox="0 0 24 24">
                <path fill="currentColor" d="M15,15V13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 15,10.5V9C15,7.89 14.1,7 13,7H9V9H13V11H11V13H13V15H9V17H13A2,2 0 0,0 15,15" />
              </svg>
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Making profit</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              If a new interested Prince comes along and is willing to pay the new claim price you are deposed of the throne. As compensation you will receive the
              newly paid 2.0 ETH (minus a small commission). So you have effectively doubled your input
            </dd>
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                
              <svg className="h-8 w-8" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9,7V13H13V17H15V7H13V11H11V7H9Z" />
              </svg>
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">The curse</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              However, an ancient curse applies to the throne: every King dies once their reign reaches 7 days. No compensation is paid when this happens.
              After that the claim price is reset to 1 FINNEY (0.001 ETH)
            </dd>
          </div>
        </dl>
      </div>

      <HallOfKings kings={kings}></HallOfKings>
    </div>
  )
}
