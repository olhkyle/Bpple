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
		content: `워낙 휴대폰을 애지중지 사용하고있느라, 애플케어 및 통신사보험을 사용하지 않고있습니다. 물에 빠트리거나, 간단한
		충격조차 없었고요, 작년 여름 정식수리업체에서 메인보드 결함 판정 후 무상수리, 메인보드 교체받았습니다. 물론
		데이터는 1도 복구 못하였구요.. 당시 교체시 카메라와 액정? 빼고 전체 {'새 제품'}으로 교체가 되었다고
		말씀하더군요. (작년 여름 사무실에서 가만히 멜론어플 사용중 전원OFF 후 켜지지 않았음) 그 같은 증상이 지난
		4월20일, 수리한지 1년도 되지 않아 발생하였습니다. 또 방문을 했지요. 메인보드 교체 후 90일 이내 무상이라고
		하네요. 결국 58만7천원을 수리비로 내야한다고 합니다. 너무 어이가 없고 억울하네요. 사운드결함은 있다고 들었는데
		어떻게하면 새 제품이 1년도 안 되서 똑같이 발생할 수가 있을까요. 교체 한 메인보드 조차 결함이 있던건 아닐까요.
		60만원이라는 거금을 투자해서 다시 수리를 해도 또 같은 증상이 발생하면 또 60만원이라는 큰 돈이 나가겠지요. 수리
		못하고있습니다. 6년된 안드로이드폰에 유심침만 꼽아놓고 있습니다. 어떤사람은 6년.. 5년.. 같은제품을 써도 이런
		증상이 없다고 하는데, 이런일이 있을수 있나요? 워낙 휴대폰을 애지중지 사용하고있느라, 애플케어 및 통신사보험을
		사용하지 않고있습니다. 물에 빠트리거나, 간단한 충격조차 없었고요, 작년 여름 정식수리업체에서 메인보드 결함 판정
		후 무상수리, 메인보드 교체받았습니다. 물론 데이터는 1도 복구 못하였구요.. 당시 교체시 카메라와 액정? 빼고 전체{' '}
		{'새 제품'}으로 교체가 되었다고 말씀하더군요. (작년 여름 사무실에서 가만히 멜론어플 사용중 전원OFF 후 켜지지
		않았음) 그 같은 증상이 지난 4월20일, 수리한지 1년도 되지 않아 발생하였습니다. 또 방문을 했지요. 메인보드 교체 후
		90일 이내 무상이라고 하네요. 결국 58만7천원을 수리비로 내야한다고 합니다. 너무 어이가 없고 억울하네요.
		사운드결함은 있다고 들었는데 어떻게하면 새 제품이 1년도 안 되서 똑같이 발생할 수가 있을까요. 교체 한 메인보드
		조차 결함이 있던건 아닐까요. 60만원이라는 거금을 투자해서 다시 수리를 해도 또 같은 증상이 발생하면 또
		60만원이라는 큰 돈이 나가겠지요. 수리 못하고있습니다. 6년된 안드로이드폰에 유심침만 꼽아놓고 있습니다.
		어떤사람은 6년.. 5년.. 같은제품을 써도 이런 증상이 없다고 하는데, 이런일이 있을수 있나요? 워낙 휴대폰을 애지중지
		사용하고있느라, 애플케어 및 통신사보험을 사용하지 않고있습니다. 물에 빠트리거나, 간단한 충격조차 없었고요, 작년
		여름 정식수리업체에서 메인보드 결함 판정 후 무상수리, 메인보드 교체받았습니다. 물론 데이터는 1도 복구
		못하였구요.. 당시 교체시 카메라와 액정? 빼고 전체 {'새 제품'}으로 교체가 되었다고 말씀하더군요. (작년 여름
		사무실에서 가만히 멜론어플 사용중 전원OFF 후 켜지지 않았음) 그 같은 증상이 지난 4월20일, 수리한지 1년도 되지
		않아 발생하였습니다. 또 방문을 했지요. 메인보드 교체 후 90일 이내 무상이라고 하네요. 결국 58만7천원을 수리비로
		내야한다고 합니다. 너무 어이가 없고 억울하네요. 사운드결함은 있다고 들었는데 어떻게하면 새 제품이 1년도 안 되서
		똑같이 발생할 수가 있을까요. 교체 한 메인보드 조차 결함이 있던건 아닐까요. 60만원이라는 거금을 투자해서 다시
		수리를 해도 또 같은 증상이 발생하면 또 60만원이라는 큰 돈이 나가겠지요. 수리 못하고있습니다. 6년된
		안드로이드폰에 유심침만 꼽아놓고 있습니다. 어떤사람은 6년.. 5년.. 같은제품을 써도 이런 증상이 없다고 하는데,
		이런일이 있을수 있나요?`,
		author: 'cooljp95@naver.com',
		createAt: new Date('2023-03-27'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-14',
		completed: false,
		certified: true,
	},

	{
		id: '2',
		title: '아이폰12 메인보드 고장이 연속으로 났습니다.',
		content: `워낙 휴대폰을 애지중지 사용하고있느라, 애플케어 및 통신사보험을 사용하지 않고있습니다.
		물에 빠트리거나, 간단한 충격조차 없었고요, 작년 여름 정식수리업체에서 메인보드 결함 판정 후 무상수리,
		메인보드 교체받았습니다. 물론 데이터는 1도 복구 못하였구요..
		당시 교체시 카메라와 액정? 빼고 전체 '새 제품'으로 교체가 되었다고 말씀하더군요.
		(작년 여름 사무실에서 가만히 멜론어플 사용중 전원OFF 후 켜지지 않았음)
		그 같은 증상이 지난 4월20일, 수리한지 1년도 되지 않아 발생하였습니다.
		또 방문을 했지요. 메인보드 교체 후 90일 이내 무상이라고 하네요. 결국 58만7천원을 수리비로 내야한다고 합니다.
		너무 어이가 없고 억울하네요. 사운드결함은 있다고 들었는데 어떻게하면 새 제품이 1년도 안 되서 똑같이 발생할 수가 있을까요.
		교체 한 메인보드 조차 결함이 있던건 아닐까요.
		60만원이라는 거금을 투자해서 다시 수리를 해도 또 같은 증상이 발생하면 또 60만원이라는 큰 돈이 나가겠지요.
		수리 못하고있습니다. 6년된 안드로이드폰에 유심침만 꼽아놓고 있습니다.
		어떤사람은 6년.. 5년.. 같은제품을 써도 이런 증상이 없다고 하는데, 이런일이 있을수 있나요?
		
		`,
		author: 'kylekwon.dev@gmail.com',
		createAt: new Date('2023-03-21'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-12',
		completed: false,
		certified: true,
	},
	{
		id: '3',
		title: '아이폰 건강 기능에 문제가 있어요',
		content: '',
		author: 'cooljp95@naver.com',
		createAt: new Date('2023-03-14'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-14-pro',
		completed: false,
		certified: false,
	},
	{
		id: '4',
		title:
			'아이폰에 에어팟 연결했을 때 한쪽 귀가 안들리는데 충전을 잘못 한 걸까요?',
		content: '',
		author: 'kylekwon.dev@gmail.com',
		createAt: new Date('2023-03-09'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-13',
		completed: true,
		certified: false,
	},
	{
		id: '5',
		title:
			'집중모드 위치설정 기기변경을 하려하는데 예전 폰으로 위치 설정이 잡히는데 어떻게 하는게 좋을까요?',
		content: '',
		author: 'cooljp95@naver.com',
		createAt: new Date('2023-03-02'),
		updateAt: new Date(),
		category: 'iPhone',
		productType: 'iphone-14',
		completed: false,
		certified: false,
	},
	{
		id: '6',
		title: 'm1 맥북에어 최대 충전속도가 어떻게 되나요?',
		content: '',
		author: 'kylekwon.dev@gmail.com',
		createAt: new Date('2023-02-21'),
		updateAt: new Date(),
		category: 'Mac',
		productType: 'macbook-air-m1',
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
		author: 'qwer@qwer.ee',
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
		author: 'qwer@qwer.ee',
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
		author: 'qwer@qwer.ee',
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
		author: 'qwer@qwer.ee',
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
		author: 'qwer@qwer.ee',
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
		author: 'qwer@qwer.ee',
		createAt: new Date('2022-12-12'),
		updateAt: new Date(),
		category: 'Ipad',
		productType: 'ipad-mini',
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
	deletePost,
};
