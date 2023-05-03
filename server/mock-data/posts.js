const { v4: uuidv4 } = require('uuid');
const comments = require('./comments');

/**
 * 	{
		id: uuidv,
		title: string,
		content: string,
		author: string,
		createAt: date,
		updateAt: date,
		category: string,
		productType: string,
		completed: boolean,
		certified: boolean,
		comments?: array[],
	},
 */

/** Comment Data
 * 
 * const comment = {
	id: uuidv4(),
	author: 'cooljp95@naver.com',
	content: '',
	createAt: new Date(),
	updateAt: new Date(),
	certified: false,
};
 */

let posts = [
	{
		id: '1',
		title: 'IOS 16.4 업데이트 후 앱 실행 시마다 셀룰러 네트워크가 자주 끊어짐',
		content: `워낙 휴대폰을 애지중지 사용하고있느라, 애플케어 및 통신사 보험을 사용하지 않고 있습니다. 물에 빠트리거나, 간단한
		충격조차 없었고요, 작년 여름 정식수리업체에서 메인보드 결함 판정 후 무상수리, 메인보드 교체받았습니다. 물론
		데이터는 1도 복구 못하였구요.. 당시 교체시 카메라와 액정? 빼고 전체 새 제품으로 교체가 되었다고
		말씀하더군요. <i>(작년 여름 사무실에서 가만히 멜론 어플 사용중 전원OFF 후 켜지지 않았음)</i> 
		<br/>
		<br/>
		이 같은 증상이 지난 4월20일, 수리한 지 1년도 되지 않아 발생하였습니다. 또 방문을 했지요. 메인보드 교체 후 90일 이내 무상이라고
		하네요. 결국, <b>58만7천원</b>을 수리비로 내야한다고 합니다. 너무 어이가 없고 억울하네요. 사운드 결함은 있다고 들었는데 어떻게하면 새 제품이 1년도 안 되서 똑같이 발생할 수가 있을까요. 교체 한 메인보드 조차 결함이 있던건 아닐까요.
		60만원이라는 거금을 투자해서 다시 수리를 해도 또 같은 증상이 발생하면 또 60만원이라는 큰 돈이 나가겠지요. 수리
		못하고 있습니다. 6년된 안드로이드 폰에 유심침만 꼽아놓고 있습니다. 어떤 사람은 6년.. 5년.. 같은 제품을 써도 이런
		증상이 없다고 하는데, 이런 일이 있을 수 있나요? `,
		author: 'cooljp95@naver.com',
		createAt: new Date('2023-03-27'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-14',
		completed: true,
		certified: true,
	},

	{
		id: '2',
		title:
			'아이폰 13프로 스피커폰으로 통화를 할 시 상대방이 제 목소리 계속 끊겨서 통화가 힘들다고 하는데 해결 방법이 있을까요?',
		content: `아이폰 13프로 사용 중인 유저입니다.<br/>
		스피커폰으로 통화를 할 시 상대방이 제 목소리 계속 끊겨서 통화가 힘들다고 합니다.<br/>
		해결 방법이 있을까요?<br/>
		`,
		author: 'kylekwon.dev@gmail.com',
		createAt: new Date('2023-03-21'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-13',
		completed: true,
		certified: true,
	},
	{
		id: '3',
		title: 'm1 맥북에어 최대 충전속도가 어떻게 되나요?',
		content: `m1 맥북에어 최대 충전속도가 어떻게 되나요..?<br/>
		급속 충전기를 사용하고 싶은데, 최대용량이 맞는 지 궁금하여 문의드립니다.`,
		author: 'email21@email.com',
		createAt: new Date('2023-03-13'),
		updateAt: new Date(),
		category: 'Mac',
		productType: 'macbook-air-m1',
		completed: false,
		certified: false,
	},
	{
		id: '4',
		title: `특정 어플을 들어갈 때마다 'java.lang.String' 관련 오류가 뜨는데 해결책이 있을까요`,
		content: `특정 어플을 들어갈 때마다<br/><br/>
		<code>Failed to convert value of type java.lang.String to required type 
		'int'; nested exception is java.lang.NumberFormatException: For input string: 'NaN'</code><br/><br/>
		위와 같은 오류가 뜹니다. 해결책이 있을까요? `,
		author: 'email11@email.com',
		createAt: new Date('2023-03-09'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-se',
		completed: false,
		certified: false,
	},
	{
		id: '5',
		title:
			'아이패드 동영상 시청 중 화면 클릭시 동영상 배속되는 기능이 작동을 하지 않습니다. 해결 방법이 있을까요?',
		content: `
		아이패드로 유튜브 동영상 시청할 때
		화면을 누르고 있을 경우 동영상이 배속이 되는 기능이 있었는데 
		어느 순간 기능이 작동하지 않습니다.
		혹시 해결방법이 있을까요?`,
		author: 'email23@email.com',
		createAt: new Date('2023-01-02'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-basic',
		completed: true,
		certified: false,
	},
	{
		id: '6',
		title: '애플 뮤직 & 앱스토어 어플 튕김',
		content:
			'<b>애플 뮤직</b>과 <b>앱스토어 어플</b>만 안들어가지고 계속 튕깁니다. 아예 어플이 안켜집니다. 재부팅도 해봤는데 똑같네요. 어떻게 해결할 수 있을까요? ',
		author: 'email15@email.com',
		createAt: new Date('2023-03-14'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-14-pro',
		completed: false,
		certified: false,
	},
	{
		id: '7',
		title: '맥북 이미지 캡처로 외장하드에 사진 옮기기',
		content: '',
		author: 'kylekwon.dev@gmail.com',
		createAt: new Date('2023-02-14'),
		updateAt: new Date(),
		category: 'Mac',
		productType: 'macbook-pro-16',
		completed: false,
		certified: false,
	},
	{
		id: '8',
		title: '맥북의 경우 trade in 어떻게 가능한가요?',
		content: '',
		author: 'cooljp95@naver.com',
		createAt: new Date('2023-02-05'),
		updateAt: new Date(),
		category: 'Mac',
		productType: 'macbook-pro-13',
		completed: true,
		certified: false,
	},
	{
		id: '9',
		title: '맥북 잠자기 프리징현상',
		content: '',
		author: 'cooljp95@naver.com',
		createAt: new Date('2023-02-01'),
		updateAt: new Date(),
		category: 'Mac',
		productType: 'macbook-pro-14',
		completed: false,
		certified: false,
	},
	{
		id: '10',
		title: '맥북 프로 화면 닦을 때 권장사항 또는 주의해야할 점 궁금합니다',
		content: '',
		author: 'kylekwon.dev@gmail.com',
		createAt: new Date('2023-01-19'),
		updateAt: new Date(),
		category: 'Mac',
		productType: 'macbook-pro-16',
		completed: false,
		certified: false,
	},
	{
		id: '11',
		title:
			'아이패드 ios 16 이후 버전에서 키보드 마우스 동시 사용시 동작이 이상합니다. 저와 같은 현상을 겪으시는분은 없으신가요?',
		content: '',
		author: 'email6@email.com',
		createAt: new Date('2023-01-12'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-pro',
		completed: false,
		certified: false,
	},
	{
		id: '12',
		title: '쿠팡에서 산 패드 교환을 공식스토어에서도 해주나요?',
		content: '',
		author: 'email7@email.com',
		createAt: new Date('2023-01-08'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-air',
		completed: false,
		certified: false,
	},
	{
		id: '13',
		title:
			'아이패드 프로6세대 12.9인치 디스플레이에 습기 찬거 같은 뿌옅고 흰색번짐 현상이 계속 나타나는데 불량인가요?',
		content: '',
		author: 'email8@email.com',
		createAt: new Date('2023-01-02'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-pro',
		completed: false,
		certified: false,
	},

	{
		id: '14',
		title:
			'맥북에서 아이패드로 에어드롭 실패 문제가 자주 발생하는데 어떤 근본적인 해결책은 없나요?',
		content: '',
		author: 'email9@email.com',
		createAt: new Date('2022-12-24'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-basic',
		completed: false,
		certified: false,
	},
	{
		id: '15',
		title: '애플 정품 20w 충전기로 아이패드 미니 6세대 충전해도 괜찮나요?',
		content: '',
		author: 'email10@email.com',
		createAt: new Date('2022-12-12'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-mini',
		completed: false,
		certified: false,
	},
	{
		id: '16',
		title: '애플 정품 15w 충전기로 아이패드 미니 5세대 충전해도 괜찮나요?',
		content: '',
		author: 'email11@email.com',
		createAt: new Date('2022-12-09'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-mini',
		completed: false,
		certified: false,
	},
	{
		id: '17',
		title:
			'로그아웃을 했다가 다시 로그인을 하고 메모를 봤더니 내용 일부분이 없어져 있었습니다',
		content: '로그아웃 후 메모 내용 사라짐.. 어떻게 해야할까요..',
		author: 'email12@email.com',
		createAt: new Date('2022-12-01'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-se',
		completed: false,
		certified: false,
	},
	{
		id: '18',
		title:
			'알림센터를 내리면 밝기가 어두워졌다가 다시 정상으로 돌아오는 화면 깜빡임 현상이 종종 나타납니다. 기기 문제일까요?',
		content: '',
		author: 'email13@email.com',
		createAt: new Date('2022-11-24'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-13',
		completed: false,
		certified: false,
	},
	{
		id: '19',
		title: '1',
		content: '',
		author: 'email13@email.com',
		createAt: new Date('2022-11-20'),
		updateAt: new Date(),
		category: 'Mac',
		productType: 'macbook-pro-14',
		completed: false,
		certified: false,
	},
	{
		id: '20',
		title: '2',
		content: '',
		author: 'email13@email.com',
		createAt: new Date('2022-11-15'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-14-pro',
		completed: false,
		certified: false,
	},
	{
		id: '21',
		title: '3',
		content: '',
		author: 'email13@email.com',
		createAt: new Date('2022-11-12'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-13',
		completed: false,
		certified: false,
	},
	{
		id: '22',
		title: '4',
		content: '',
		author: 'email13@email.com',
		createAt: new Date('2022-11-10'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-13',
		completed: false,
		certified: false,
	},
	{
		id: '23',
		title: '5',
		content: '',
		author: 'email13@email.com',
		createAt: new Date('2022-11-04'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-14',
		completed: false,
		certified: false,
	},
	{
		id: '24',
		title: '6',
		content: '',
		author: 'email13@email.com',
		createAt: new Date('2022-11-01'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-13',
		completed: false,
		certified: false,
	},
	{
		id: '25',
		title: '6',
		content: '',
		author: 'email13@email.com',
		createAt: new Date('2022-11-01'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-13',
		completed: false,
		certified: false,
	},
];

const getPosts = () => posts;

const getFilteredPosts = (category = '') => {
	return category === ''
		? posts
		: posts.filter((post) => post.category.toLowerCase() === category);
};

const getMyPosts = (author) => {
	return posts.filter((posts) => posts.author === author);
};

const getPost = (postId) => posts.find((post) => post.id === postId);

// TODO : 작성자 point 추가하기
const createPost = (postInfo) => {
	const id = uuidv4();

	posts = [
		{
			...postInfo,
			id,
			createAt: new Date(),
			comments: [],
			completed: false,
			certified: false,
		},
		...posts,
	];

	return id;
};

const updatePost = (postId, updateInfo) => {
	posts = posts.map((post) =>
		post.id === postId ? { ...post, ...updateInfo, updateAt: new Date() } : post
	);
};

const updateCompletedPost = (postId, completed) => {
	posts = posts.map((post) =>
		post.id === postId ? { ...post, completed } : post
	);
};

const updateCertifiedPost = (postId, certified) => {
	posts = posts.map((post) =>
		post.id === postId ? { ...post, certified } : post
	);
};

// TODO : 작성자 point 차감하기
const deletePost = (postId) =>
	(posts = posts.filter(({ id }) => id !== postId));

// Autocomplete Search Posts -> Max Count :5
const searchPost = (posts, keyword = '') => {
	return posts.filter(({ title }) => new RegExp(keyword, 'i').test(title));
};

module.exports = {
	getPosts,
	getFilteredPosts,
	getMyPosts,
	getPost,
	searchPost,
	createPost,
	updatePost,
	updateCompletedPost,
	updateCertifiedPost,
	deletePost,
};
