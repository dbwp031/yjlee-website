import type { CVData } from '../types';

export const cvData: CVData = {
  summary:
    'AI 연구와 서비스 개발 경험을 모두 갖춘 백엔드 개발자입니다. 딥러닝 연구실 학부연구생과 AI 회사 인턴 경험을 통해 AI에 대한 이해와 실무능력을 쌓았으며, 이후 백엔드 개발자로서 데이터 중심 서비스의 설계와 구현을 담당해왔습니다. 트랜잭션 구조 설계, Sentence Transformer를 활용한 데이터 분석 시스템 구축 등 AI를 하나의 기술 스택으로 활용하여 향상된 서비스를 제공하는 개발을 지향합니다.',

  experience: [
    {
      id: 'exp-1',
      company: '프람트테크놀로지',
      role: 'Backend Developer',
      location: 'Seoul, Korea',
      startDate: '2023-11',
      endDate: '2026-01',
      description: [
        '전략물자관리 서비스 재구축: MSA 기반 시스템 중 기타민원 신청 도메인 담당, 레거시 코드 분석 및 업무 흐름 재설계로 분기 수 80% 감소',
        '국가법령정보 플랫폼 고도화: 배치 시스템 설계 및 개선, Sentence-Transformers 기반 법령해석 데이터 중복·유사·상충 분석 시스템 구축',
        '서울지하철 데이터 API 개방: On-Premise 환경 Nginx 기반 로드밸런싱 및 서버 이중화 구성, 열차시간표 관리 시스템 개발',
        '데이터 중심 서비스의 Spring 기반 백엔드 개발 및 관리자 페이지 풀스택 개발',
      ],
      techStack: ['Spring Boot', 'JPA', 'MyBatis', 'PostgreSQL', 'MariaDB', 'Tibero', 'Python', 'FastAPI'],
    },
    {
      id: 'exp-2',
      company: 'Nota AI',
      role: 'Deep Learning Model Optimization Intern',
      location: 'Seoul, Korea',
      startDate: '2022-09',
      endDate: '2023-04',
      description: [
        'AI 카메라 모듈용 경량 객체 탐지 모델 연구: YOLOv5 구조별 가중치 차등 적용 경량화 기법 제안, 기존 대비 60% 이상 압축 및 성능 하락 5% 이내 유지',
        '대표 딥러닝 모델(VGG, ResNet, YOLOX 등) 경량화 및 재학습, ONNX 변환, 성능 측정',
        '모델 압축 실험 자동화 파이프라인 구축으로 업무 효율 약 30% 개선',
      ],
      techStack: ['Python', 'PyTorch', 'ONNX', 'Linux', 'Docker'],
    },
  ],

  education: [
    {
      id: 'edu-1',
      institution: '경희대학교 (Kyung Hee University)',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2019-03',
      endDate: '2023-08',
      description: 'GPA: 4.22 / 4.5',
    },
  ],

  skills: [
    {
      category: 'Languages',
      items: ['Java', 'Python', 'SQL', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Frameworks',
      items: ['Spring Boot', 'JPA', 'MyBatis', 'FastAPI', 'Thymeleaf'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MariaDB', 'Tibero', 'ElasticSearch'],
    },
    {
      category: 'AI/ML',
      items: ['PyTorch', 'HuggingFace', 'Sentence-Transformers', 'ONNX'],
    },
    {
      category: 'Infrastructure',
      items: ['Docker', 'Linux', 'Nginx', 'G-Cloud'],
    },
    {
      category: 'Tools & Certifications',
      items: ['Git', 'SQLD', 'OPic IH'],
    },
  ],
};
