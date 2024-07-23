const InviteButton = () => {
    return (
        <div className="w-auto h-auto flex flex-row bg-gray-900 my-4 text-gray-600 justify-between mx-4 rounded-md px-2 py-2 items-center">
            <div>
                <img src='./logo/youtube.svg' className="logo w-10 h-10 object-cover" alt="YouTube logo" />
            </div>
            <div className="flex flex-col">
                <h1 className="font-semibold text-lg text-blue-600">0.24 Tokens</h1>
                <p className="text-sm">Follow us on Telegram Channel</p>
            </div>
            <div className="text-blue-600">
                <img src='./navigation/arrow-right-circled.svg' className="logo w-10 h-10 object-cover" alt="Right arrow logo" />
            </div>
        </div>


    )
}

export default InviteButton