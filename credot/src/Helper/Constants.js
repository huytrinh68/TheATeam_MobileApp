import LocalImage from './LocalImage'

const listBank = [
    {
        id: '1',
        name: 'BIDV',
        image: require('../../image/bidv.png')
    },
    {
        id: '2',
        name: 'ACB',
        image: require('../../image/acb.png')
    },
    {
        id: '3',
        name: 'AGRIBANK',
        image: require('../../image/agribank.png')
    },
    {
        id: '4',
        name: 'MSB',
        image: require('../../image/msb.jpeg')
    },
    {
        id: '5',
        name: 'VIETCOMBANK',
        image: require('../../image/vietcombank.jpg')
    },
]

const suggestionLoan = [

    {
        id: 1,
        value: '1.000.000',
        percent: '10',
        description: 'Viettel Telecom is currently the dominant network operator with the largest market share in Vietnamese telecommunications services market.',
        image: require('../../image/gradientOne.jpg'),
        time: '1 year'
    },
    {
        id: 2,
        value: '2.000.000',
        percent: '9.5',
        description: 'Viettel Telecom is currently the dominant network operator with the largest market share in Vietnamese telecommunications services market.',
        image: require('../../image/gradientSix.jpg'),
        time: '1 year'

    },
    {
        id: 3,
        value: '3.000.000',
        percent: '8.7',
        description: 'Viettel Telecom is currently the dominant network operator with the largest market share in Vietnamese telecommunications services market.',
        image: require('../../image/gradientThree.jpg'),
        time: '1 year'

    },
    {
        id: 4,
        value: '4.000.000',
        percent: '8',
        description: 'Viettel Telecom is currently the dominant network operator with the largest market share in Vietnamese telecommunications services market.',
        image: require('../../image/gradientFour.jpg'),
        time: '1 year'

    },
    {
        id: 5,
        value: '5.000.000',
        percent: '6.8',
        description: 'Viettel Telecom is currently the dominant network operator with the largest market share in Vietnamese telecommunications services market.',
        image: require('../../image/gradientFive.jpg'),
        time: '1 year'

    },
    {
        id: 6,
        value: '6.000.000',
        percent: '5.2',
        description: 'Viettel Telecom is currently the dominant network operator with the largest market share in Vietnamese telecommunications services market.',
        image: require('../../image/gradientSix.jpg'),
        time: '1 year'

    },
    {
        id: 7,
        value: '7.000.000',
        percent: '4',
        description: 'Viettel Telecom is currently the dominant network operator with the largest market share in Vietnamese telecommunications services market.',
        image: require('../../image/gradientSeven.jpg'),
        time: '1 year'

    },
]

const introductionData = [
    {
        id: '1',
        text:'Đăng nhập vào tài khoản Credot của bạn',
        title: 'Bước 1',
        image: LocalImage.step1
    },
    {
        id: '2',
        text:'Xem điểm tín dụng của bạn trên màn hình chính',
        image: LocalImage.step2,
        title: 'Bước 2'
    },
    {
        id: '3',
        text: `Gửi yêu cầu vay tiền cho ngân hàng`,
        image: LocalImage.step3,
        title: 'Bước 3'
    },
    {
        id: '3',
        text: `Theo dõi tình trạng gói vay của bạn`,
        image: LocalImage.step4,
        title: 'Bước 4'
    },
]

const improvePoint = [
    {
        id: '1',
        image: LocalImage.improve1,
        title: 'Một số phương pháp cải thiện điểm tín dụng',
        content: 'Điểm tín dụng của mỗi người dùng sử dụng ứng dụng Credot được đánh giá dựa trên thói quen tiêu dùng dùng thuê bao hàng tháng. Vì vậy, để cải thiện điểm tín dụng của mình, Credot khuyên bạn nên áp dụng những phương pháp sau đây.'
    },
    {
        id: '2',
        image: LocalImage.improve2,
        title: 'Thanh toán thuê bao đúng hạn & đầy đủ',
        content: 'Luôn theo dõi thông báo & nạp tiền trả trước/ thanh toán cước trả sau đúng hạn. Tránh để xảy ra các trường hợp nhà mạng hạn chế hoạt động thuê bao.'
    },
    {
        id: '3',
        image: LocalImage.improve3,
        title: 'Hạn chế tạm ứng tiền điện thoại',
        content: 'Tạm ứng tiền điện thoại cho thấy bạn đang không có đủ tiền trong thuê bao của bạn. Hoạt động tạm ứng tương đương với việc vay tiền để trả trước khoản nợ của bạn. Hạn chế tạm ứng sẽ giảm bớt hệ số rủi ro tín dụng của bạn.'
    },
    {
        id: '4',
        image: LocalImage.improve4,
        title: 'Thanh toán tiền tạm ứng nhanh chóng',
        content: 'Trong trường hợp bắt buộc cần đến hoạt động tạm ứng, hãy thanh toán khoản tạm ứng của mình sớm để giảm bớt hệ số rủi ro tín dụng.'
    },
    {
        id: '5',
        image: LocalImage.improve5,
        title: 'Luôn theo dõi thông báo các khoản cần thanh toán',
        content: 'Theo dõi thông báo về các khoản thanh toán của mình để thanh toán thuê bao đầy đủ và đúng hạn.'
    },
    {
        id: '6',
        image: LocalImage.improve6,
        title: 'Nạp tiền một lần & tránh nạp nhiều khoản vụn vặt',
        content: 'Nạp một lần lượng tiền mà bạn sẽ sử dụng trong một tháng, hạn chế nạp nhiều khoản tiền vụn vặt nếu không cần thiết đối với thuê bao trả trước.'
    },
]

const reasonRequest = [
    {
        id: '1',
        label: 'Tiêu dùng tín chấp'
    },
    {
        id: '2',
        label: 'Sửa nhà'
    },
    {
        id: '3',
        label: 'Mua ô tô'
    },
    {
        id: '4',
        label: 'Mua xe máy'
    },
    {
        id: '5',
        label: 'Nộp học phí'
    },
    {
        id: '6',
        label: 'Trả tiền thuê nhà'
    },
    {
        id: '7',
        label: 'Chứng minh tài chính'
    },
    {
        id: '8',
        label: 'Vay vốn kinh doanh'
    },
    {
        id: '9',
        label: 'Khác'
    },
]
export {
    listBank,
    suggestionLoan,
    introductionData,
    improvePoint,
    reasonRequest
}