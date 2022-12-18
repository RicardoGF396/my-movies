import Profile_img from "./../../src/assets/profile.svg";

function Profile() {
  return (
    <div className="flex gap-3">
    <img src={Profile_img} />
    <div className="flex flex-col">
      <h3 className="text-white font-normal">Ricardo González Flores</h3>
      <h4 className="text-main-gray font-semibold text-xs ">Desarrollador Full Stack</h4>
    </div>
    </div>
  )
}

export default Profile