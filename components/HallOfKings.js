const HallOfKings = ({ kings }) => {
  return (
    <div>
      <div className="mt-16 text-center text-3xl">Hall of Kings</div>
      <div className="flex flex-col mt-4 mx-32">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Alias
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Throne Claimed
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Value
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {kings.map((king, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">{king.kingAddress}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{king.kingAlias}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{king.claimTime}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{king.claimPrice}</td>
                    </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HallOfKings;