  <form
    onSubmit={handlePlaceOrder}
    className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid p-10"
  >
    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900 text-gray-50">
      <div className="space-y-2 col-span-full lg:col-span-1">
        <p className="font-medium">Price: ${price}</p>
        <p className="text-xl">SErvice: {services_name}</p>
      </div>
      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
        <div className="col-span-full sm:col-span-3">
          <label for="username" className="text-sm">
            First Name
          </label>
          <input
        
            name="firstName"
            type="text"
            placeholder="Username"
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
          />
        </div>

        <div className="col-span-full sm:col-span-3">
          <label for="username" className="text-sm">
            Last Name
          </label>
          <input
          
            name="lastName"
            type="text"
            placeholder="Username"
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label for="website" className="text-sm">
            Email
          </label>
          <input
          
            name="email"
            type="text"
            placeholder="email"
            defaultValue={user?.email}
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
            readOnly
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label for="website" className="text-sm">
            Password
          </label>
          <input
            id="website"
            name="password"
            type="password"
            placeholder="password"
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label for="website" className="text-sm">
            Phone
          </label>
          <input
            
            name="phone"
            type="text"
            placeholder="phone"
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
          />
        </div>
        <div className="col-span-full">
          <label for="bio" className="text-sm">
            Review
          </label>
          <textarea
         
            name="message"
            placeholder="please write a review"
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
          ></textarea>
        </div>
        <div className="col-span-full">
          
          <div className="flex items-center space-x-2">
            

            <input
              className="px-4 py-2 border rounded-md border-red-700"
              type="submit"
              value="Place Your Order"
            />
          </div>
        </div>
      </div>
    </fieldset>
  </form>
