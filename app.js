// Kakao 지도 API 설정
const mapContainer = document.getElementById('map-container');
const mapOptions = {
    center: new kakao.maps.LatLng(33.4996, 126.5312), // 제주도 위치 (밀원 지역)
    level: 7,
};

const map = new kakao.maps.Map(mapContainer, mapOptions);

// 마커 예시 (여기서 실제 밀원 정보를 기반으로 위치를 변경할 수 있음)
const markerPosition = new kakao.maps.LatLng(33.4996, 126.5312);
const marker = new kakao.maps.Marker({
    position: markerPosition,
});

marker.setMap(map);

// "다시 스캔" 버튼 기능
function goBack() {
    // 사용자가 QR 코드 스캔을 다시 할 수 있도록 이전 페이지로 이동 (또는 QR 스캔 기능 추가)
    window.history.back();
}

// "이 정보 공유하기" 버튼 기능
function shareInfo() {
    // 정보 공유 기능 (예: SNS 공유, 링크 복사 등)
    const infoText = `자연 꿀\n밀원: 제주도\n인증: GMP 인증, 친환경 인증`;
    if (navigator.share) {
        navigator.share({
            title: '자연 꿀 정보',
            text: infoText,
            url: window.location.href,
        }).catch(error => console.log('공유 실패: ', error));
    } else {
        alert('이 디바이스는 공유 기능을 지원하지 않습니다.');
    }
}
