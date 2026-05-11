import group from "./assets/group.png";

function Footer() {
  return (
    <footer className="w-full">
      
      <div className="bg-green-300 w-full py-5">
        
        
        <div className="max-w-6xl mx-auto px-4"> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-4 justify-items-center">
            
            
            <div className="flex items-center gap-4 w-full max-w-75">
              <div className="bg-orange-400 p-2 rounded-full h-14 w-14 shrink-0 flex items-center justify-center">
                <img className="h-8 w-8" src={group} alt="community" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-gray-900 leading-tight">Join A Community</h1>
                <p className="text-sm text-gray-800">Connect with like-minded individuals and create impact</p>
              </div>
            </div>

            
            <div className="flex items-center gap-4 w-full max-w-75">
              <div className="bg-orange-400 p-2 rounded-full h-14 w-14 shrink-0 flex items-center justify-center">
                <img className="h-8 w-8" src={group} alt="impact" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-gray-900 leading-tight">Make a Different</h1>
                <p className="text-sm text-gray-800">Your small steps can bring a big chance</p>
              </div>
            </div>

            
            <div className="flex items-center gap-4 w-full max-w-75">
              <div className="bg-orange-400 p-2 rounded-full h-14 w-14 shrink-0 flex items-center justify-center">
                <img className="h-8 w-8" src={group} alt="secure" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-gray-900 leading-tight">Safe & Secure</h1>
                <p className="text-sm text-gray-800">We ensure your data is protected & secured</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      
      <div className="h-16 w-full bg-black flex items-center justify-center">
        <p className="text-white text-sm opacity-80">&copy; 2026 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;