function ProfilePic() {
	const imagUrl = "./src/assets/personal-pic-with-rahil.png";
	const handleClick = (e) => (e.target.style.display = "none");
	return (
		<>
			<img onClick={(e) => handleClick(e)} src={imagUrl}></img>
		</>
	);
}
export default ProfilePic;
