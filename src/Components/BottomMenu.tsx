
const BottomMenu = () => {
  return (
    <div className="flex w-auto my-2 mx-1 h-auto flex-row bg-slate-200 text-blue-600 justify-around text-sm font-semibold rounded-md">
    <div className="flex flex-col items-center">
        <img src='./menu/user.svg' className="w-8 h-8 object-contain" alt="User logo" />
        <div>Profile</div>
    </div>
    <div className="flex flex-col items-center">
        <img src='./menu/lens.svg' className="w-8 h-8 object-contain" alt="Lens logo" />
        <div>Jobs</div>
    </div>
    <div className="flex flex-col items-center w-12 h-12 bg-blue-900 rounded-full">
        <img src='./menu/home.svg' className="w-full h-full p-1" alt="Home logo" />
    </div>
    <div className="flex flex-col items-center">
        <img src='./menu/people.svg' className="w-8 h-8 object-contain" alt="People logo" />
        <div>Connect</div>
    </div>
    <div className="flex flex-col items-center">
        <img src='./menu/people.svg' className="w-8 h-8 object-contain" alt="People logo" />
        <div>Boost</div>
    </div>
</div>

  )
}

export default BottomMenu