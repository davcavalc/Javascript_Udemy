import React from "react";

const LinkTree = () => {
	return (
		<div className="glass">
			<div className="flex flex-col items-center mt-8 text-white gap-6">
				<img src="/images.jpg" alt="" />
				<h1>Fulano da Siva</h1>
			</div>
			<div className="mb-8 flex flex-col justify-center">
                <a href="" className="text-white">
                <i class="fa-brands fa-instagram"></i>
					Instagram
				</a>
				<a href="" className="text-white">
					Snapchat
				</a>
				<a href="" className="text-white">
					TikTok
				</a>
				<a href="" className="text-white">
					Youtube
				</a>
			</div>
		</div>
	);
};

export default LinkTree;
