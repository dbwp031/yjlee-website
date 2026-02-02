import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'strategic-materials',
    title: '전략물자관리 서비스 재구축',
    description: 'MSA 기반 전략물자관리 시스템의 기타민원 신청 도메인 개발. 레거시 코드 분석 및 업무 흐름 재설계.',
    longDescription: 'MSA 기반 전략물자관리 시스템 중 기타민원 신청 도메인을 담당했습니다. 단일 메서드에 집중된 업무 프로세스를 분석하여 Enum 기반 상태 모델로 명시화하고, 반복되는 업무 단계 처리를 모듈화하여 핵심 제출 플로우의 분기 수를 기존 50여개에서 10개 수준으로 약 80% 축소했습니다.',
    techStack: ['Spring Boot', 'MyBatis', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 'law-platform',
    title: '국가법령정보 플랫폼 고도화',
    description: '국가법령정보 크롤링 배치 시스템 구축 및 Sentence-Transformers 기반 법령해석 데이터 분석 시스템 개발.',
    longDescription: '배치 시스템 개발: 외부 시스템 Health Check 도입으로 Fail-fast 방식 적용, 멀티 스레드 병렬 처리로 배치 수행 시간 최대 60% 감축, 프록시 기반 트랜잭션 분리로 청크 단위 롤백 가능하게 재설계. 데이터 분석 시스템: Sentence-Transformers 기반 임베딩 모델과 ElasticSearch를 활용한 법령해석 데이터 중복·유사·상충 분석 시스템 구축.',
    techStack: ['Spring', 'MyBatis', 'Tibero', 'Python', 'FastAPI', 'HuggingFace', 'ElasticSearch'],
    featured: true,
  },
  {
    id: 'subway-api',
    title: '서울지하철 데이터 API 개방',
    description: 'On-Premise 환경 내 인프라 구축 및 열차시간표 관리 시스템 개발.',
    longDescription: 'On-Premise 환경에서 Nginx 기반 로드밸런싱 및 서버 이중화를 구성했습니다. 호선별 운행 특성과 예외 케이스를 분석하여 상하행 구분, 출발역, 열차번호 체계 등 호선별 특수성을 고려한 열차시간표 데이터 모델을 설계하고, 운영 담당자와 협의하여 엑셀 업로드/다운로드 기능을 구축했습니다.',
    techStack: ['Spring Boot', 'JPA', 'MariaDB', 'Nginx'],
    featured: true,
  },
  {
    id: 'yolo-optimization',
    title: 'AI 카메라 모듈용 경량 객체 탐지 모델 연구',
    description: 'YOLOv5 모델 구조별 가중치 차등 적용을 통한 경량화 기법 제안.',
    longDescription: '경량화 솔루션을 활용한 딥러닝 모델로는 요구 성능을 충족하지 못하는 문제를 해결하기 위해, YOLOv5 모델을 구조별로 구분하여 가중치 차등 적용 경량화 기법을 제안했습니다. 기존 대비 60% 이상 압축하면서 성능 하락 5% 이내를 유지하여 과제 요구 성능을 충족했습니다.',
    techStack: ['Python', 'PyTorch', 'Linux', 'Docker'],
  },
  {
    id: 'model-optimization',
    title: '대표 딥러닝 모델 최적 모델 도출 연구',
    description: '이미지 모델(VGG, ResNet, YOLOX 등)에 대한 경량화 및 재학습, ONNX 변환 자동화 파이프라인 구축.',
    longDescription: '각 모델별 최적의 경량 모델을 측정하기 위해 수십 번 이상의 실험이 필요한 상황에서, 모델 압축 실험 자동화 파이프라인을 구축했습니다. 경량화 → 재학습 → ONNX 변환 및 성능 측정 자동화를 통해 업무 효율을 약 30% 개선했습니다.',
    techStack: ['Python', 'PyTorch', 'ONNX', 'Linux', 'Docker'],
  },
  {
    id: 'makeus-challenge',
    title: 'University MakeUs Challenge',
    description: '프로젝트 서비스 1등상 수상. 백엔드 파트 리더로 참여.',
    longDescription: 'University MakeUs Challenge에서 백엔드 파트 리더로 참여하여 프로젝트 서비스 부문 1등상을 수상했습니다. (2024.02)',
    techStack: ['Spring Boot', 'JPA'],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
