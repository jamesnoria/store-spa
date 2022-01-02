import Header from '../templates/Header';
import Home from '../pages/Home';

const routes = {
	'/': 'Home',
};

const router = async () => {
	const header = null || document.getElementById('header');
	const content = null || document.getElementById('content');
	header.innerHTML = await Header();
	content.innerHTML = await Home();
};

export default router;
