import reactLogo from '@/assets/react.svg';
import './index.scss';

function Home() {
	return (
		<>
			<div className="title">
				<img src={reactLogo} alt="" />
				小哲自制react模板
			</div>
			<p className="style-isolated">样式隔离</p>
		</>
	);
}

export default Home;
