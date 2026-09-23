// Portfolio content. Keep factual details grounded in the documented project sources.
window.PORTFOLIO_DATA = {
  "projects": [
    {
      "id": "losstwin",
      "rank": 3,
      "title": "LossTwin AI",
      "type": "Hackathon MVP",
      "categories": [
        "main",
        "ai",
        "service"
      ],
      "cover": "assets/losstwin-cover.png",
      "coverFit": "contain",
      "desc": "CNC 설비 이상 신호를 손실금액으로 환산하고, 조치 비용·ROI 비교를 거쳐 승인과 작업지시까지 연결한 스마트공장 의사결정 MVP입니다.",
      "tags": [
        "React",
        "TypeScript",
        "ROI Logic",
        "Hackathon"
      ],
      "media": [
        {
          "src": "assets/losstwin-cover.png",
          "alt": "LossTwin AI 본선 3등 회고 커버"
        },
        {
          "src": "assets/losstwin-final-leaderboard.jpeg",
          "alt": "LossTwin AI 본선 해커톤 최종 3위 결과 캡처",
          "caption": "본선 해커톤 최종 결과 · 전체 3위 기록"
        },
        {
          "src": "assets/losstwin-dashboard.png",
          "alt": "LossTwin AI 대시보드 화면",
          "caption": "대시보드 화면 · 예상 손실과 승인 흐름 요약"
        },
        {
          "src": "assets/losstwin-line-monitoring.png",
          "alt": "LossTwin AI 라인 모니터링 화면",
          "caption": "라인 모니터링 화면 · 공정 상태와 설비 이상 추적"
        },
        {
          "src": "assets/losstwin-simulation-explained.png",
          "alt": "LossTwin AI 시뮬레이션 화면",
          "caption": "시뮬레이션 화면 · 이상 신호와 AI 추천 조치 확인"
        }
      ],
      "links": {
        "github": "https://github.com/Lova-clover/LossTwin-AI",
        "velog": "https://velog.io/@lova-clover/2026-스마트-공장-MVP-해커톤-LossTwin-AI-회고"
      },
      "metrics": [
        [
          "My Role",
          "문제 정의·MVP 흐름 설계/구현"
        ],
        [
          "Problem",
          "알람·손실·조치가 분리된 제조 현장"
        ],
        [
          "Build",
          "AI 이상 점수 · 손실금액 · ROI · 작업지시"
        ],
        [
          "Result",
          "본선 해커톤 3위"
        ]
      ],
      "build": [
        "토크·온도·진동 편차와 불량 추세를 조합해 현장에서 설명 가능한 이상 점수 산출 방식을 구성했습니다.",
        "정지 손실, 불량 폐기 손실, 납기 지연 리스크를 합산해 예상 손실금액으로 환산했습니다.",
        "조치 비용, 절감 효과, 실행 신속성, SOP 적합성을 함께 비교해 승인과 작업지시까지 이어지는 MVP 화면을 구현했습니다."
      ],
      "impact": [
        "단순 알림보다 손실·비용·작업 실행까지 이어지는 액션 중심 구조가 중요하다는 점을 확인했습니다.",
        "DACON 수상 인증서 기준 3/163을 기록하며 2026 스마트 공장 운영 시스템 MVP 개발 본선 해커톤 3위를 수상했습니다."
      ]
    },
    {
      "id": "devhistory",
      "rank": 10,
      "title": "DevHistory",
      "type": "Archive Automation",
      "categories": [
        "service",
        "automation",
        "main-wide"
      ],
      "cover": "assets/devhistory-portfolio.png",
      "coverFit": "contain",
      "desc": "GitHub, Velog, solved.ac 활동을 수집·정규화해 주간 리포트와 포트폴리오 증빙으로 재가공하는 기록 자동화 플랫폼입니다.",
      "tags": [
        "FastAPI",
        "Celery",
        "Redis",
        "PostgreSQL"
      ],
      "media": [
        {
          "src": "assets/devhistory-portfolio.png",
          "alt": "DevHistory 포트폴리오 생성 화면"
        },
        {
          "src": "assets/devhistory-generated-blog.png",
          "alt": "DevHistory 블로그 생성 화면"
        },
        {
          "src": "assets/devhistory-dashboard.png",
          "alt": "DevHistory 대시보드 화면"
        },
        {
          "src": "assets/devhistory.png",
          "alt": "DevHistory 로고와 서비스 화면"
        }
      ],
      "links": {
        "github": "https://github.com/Lova-clover/DevHistory",
        "velog": "https://velog.io/@lova-clover/DevHistory-개발-포트폴리오-자동화-플랫폼-만들기"
      },
      "metrics": [
        [
          "My Role",
          "개인 기획·백엔드 자동화"
        ],
        [
          "Problem",
          "흩어진 개발 활동과 회고 기록"
        ],
        [
          "Build",
          "GitHub · Velog · solved.ac 수집"
        ],
        [
          "Result",
          "리포트와 포트폴리오 증빙 자동화"
        ]
      ],
      "build": [
        "여러 플랫폼의 활동 데이터를 수집하고 프로젝트 단위로 정규화했습니다.",
        "주간 리포트와 포트폴리오 근거로 재사용할 수 있는 출력 구조를 만들었습니다.",
        "Celery와 Redis 기반으로 스케줄 실행, 실패 재시도, 로그 기록까지 이어지는 백그라운드 처리 흐름을 설계했습니다."
      ],
      "impact": [
        "포트폴리오를 말로 꾸미는 대신 실제 활동 기록을 근거로 보여주는 방향성을 만들었습니다.",
        "이후 프로젝트 정리와 회고를 자동화하는 개인 아카이브 기반이 되었습니다."
      ],
      "summary": "GitHub·Velog·solved.ac 활동을 수집·정규화하고 Celery·Redis 기반 작업으로 주간 리포트와 포트폴리오 근거를 만드는 기록 자동화 프로젝트입니다."
    },
    {
      "id": "mediclear",
      "rank": 5,
      "title": "MediClear",
      "type": "Medical Ops",
      "categories": [
        "main",
        "service",
        "ai"
      ],
      "cover": "assets/medibridge.png",
      "coverFit": "phone",
      "desc": "K-Intelligence v1 탈락 이후 퇴원 후 14일 관리 흐름을 다시 설계해, 강원도 대학생 AI 활용 창업 공모전 장려상까지 이어간 의료 운영 자동화 프로젝트입니다.",
      "tags": [
        "RAG",
        "FastAPI",
        "pgvector",
        "Docker"
      ],
      "media": [
        {
          "src": "assets/medibridge.png",
          "alt": "MediClear v2 모바일 환자 화면",
          "caption": "v2 환자 모바일 화면 · 강원도 대학생 AI 활용 창업 공모전 장려상",
          "phone": true
        },
        {
          "src": "assets/mediclear-faq.png",
          "alt": "MediClear v2 환자 FAQ 모달",
          "caption": "v2 환자 FAQ 모달 · 물음표 버튼으로 확인하는 자주 묻는 질문",
          "phone": true
        },
        {
          "src": "assets/medibridge-patient-check.png",
          "alt": "MediClear v2 환자 상태 체크 화면",
          "caption": "v2 환자 상태 체크 · 통증, 발열, 수술 부위 상태 입력 흐름",
          "phone": true
        },
        {
          "src": "assets/medibridge-admin-dashboard.png",
          "alt": "MediClear v2 관리자 대시보드",
          "caption": "v2 관리자 대시보드 · 위험신호와 응답 현황 관리"
        },
        {
          "src": "assets/medibridge-admin-doc.png",
          "alt": "MediClear v2 퇴원 안내문 생성 화면",
          "caption": "v2 퇴원 안내문 생성 · 환자별 RAG 안내문 운영"
        },
        {
          "src": "assets/medibridge-flow.png",
          "alt": "MediClear v2 운영 흐름",
          "caption": "v2 운영 아키텍처 · 병원, AI 생성, 환자 응답, 병원 관리 흐름"
        }
      ],
      "links": {
        "github": {
          "href": "https://github.com/Lova-clover/MediClear-K-Intelligence-2025-Track-2",
          "label": "GitHub v1"
        },
        "velog": {
          "href": "https://velog.io/@lova-clover/K-intelligence-해커톤-2025-Track-2-GPT-4o-기반-Custom-모델beta-예선-본선-참가-후기",
          "label": "Velog v1"
        }
      },
      "metrics": [
        [
          "My Role",
          "퇴원 후 관리 서비스 흐름·AI 구조 설계"
        ],
        [
          "Problem",
          "퇴원 후 안내·상태 관리 흐름 분산"
        ],
        [
          "Build",
          "RAG 안내문 · 알림 · 설문 · 위험신호"
        ],
        [
          "Result",
          "강원도 대학생 AI 활용 창업 공모전 장려상"
        ]
      ],
      "build": [
        "v1에서 대회 탈락 후, 단순 안내문 생성만으로는 운영 가치가 약하다고 보고 퇴원 후 관리 흐름을 다시 설계했습니다.",
        "EMR 정보를 바탕으로 환자별 퇴원 안내문을 생성하고, 알림·설문·위험신호를 관리자 대시보드로 연결했습니다.",
        "환자, 병원, AI 안내문 생성, 환자 응답, 병원 관리 단계를 분리해 실제 운영 프로세스처럼 보이도록 구조화했습니다."
      ],
      "impact": [
        "탈락한 아이디어를 그대로 버리지 않고 부족했던 운영 흐름을 보완해 v2로 고도화했고, 강원도 대학생 AI 활용 창업 공모전 장려상으로 이어졌습니다.",
        "현재 GitHub와 Velog는 v1 기록이며, v2 코드는 private이라 공개 이후 별도 링크로 추가할 예정입니다."
      ]
    },
    {
      "id": "kmomento",
      "rank": 9,
      "title": "K-MOMENTO AI",
      "type": "Sports Data",
      "categories": [
        "ai",
        "main-wide"
      ],
      "cover": "assets/kmomento-match.png",
      "coverFit": "phone",
      "desc": "K리그 이벤트 데이터를 xG/xT 기반 모멘텀으로 환산하고, 전환점 탐지와 스토리 카드 생성으로 팬 친화적 경기 흐름 해설을 구성했습니다.",
      "tags": [
        "xG/xT",
        "SciPy Peak Detection",
        "GPT-4 해설",
        "Story Card"
      ],
      "media": [
        {
          "src": "assets/kmomento-match.png",
          "alt": "K-MOMENTO AI 경기 선택 화면",
          "phone": true
        },
        {
          "src": "assets/kmomento-visualization.png",
          "alt": "K-MOMENTO AI 경기 흐름 시각화"
        },
        {
          "src": "assets/kmomento-cover.jpeg",
          "alt": "K-MOMENTO AI 경진대회 제출 화면"
        }
      ],
      "links": {
        "velog": "https://velog.io/@lova-clover/DACON-K리그-AI-경진대회-15등장려상-모멘텀-그래프스토리-카드-자동화-K-MOMENTO-AI-후기",
        "site": {
          "href": "https://dacon.io/competitions/official/236648/codeshare/13760",
          "label": "DACON 코드공유"
        }
      },
      "metrics": [
        [
          "My Role",
          "개인 모델링·스토리 카드 설계"
        ],
        [
          "Problem",
          "복잡한 경기 로그를 팬이 이해하는 흐름으로 전환"
        ],
        [
          "Build",
          "xG/xT 모멘텀 · 전환점 탐지 · 카드 생성"
        ],
        [
          "Result",
          "Track2 15위 · 장려상"
        ]
      ],
      "build": [
        "raw_data와 match_info를 경기·팀·이벤트·좌표 단위로 정리해 분석 가능한 형태로 전처리했습니다.",
        "xG는 Logistic Regression, xT는 Markov Chain 전이 확률 기반으로 구성해 경기 모멘텀을 시간축으로 시각화했습니다.",
        "SciPy Peak Detection으로 Top 3 전환점을 찾고, 그래프와 스토리 카드로 팬이 이해할 수 있는 해설 흐름을 만들었습니다."
      ],
      "impact": [
        "스포츠 데이터는 예측보다 흐름, 전환점, 원인을 함께 설명할 때 팬 경험으로 이어진다는 점을 확인했습니다.",
        "DACON 수상 인증서 기준 15/38을 기록하며 Track2 아이디어 개발 부문 장려상을 수상했습니다."
      ],
      "summary": "경기 흐름을 분석해 주요 장면과 관전 포인트를 정리한 K리그 AI 프로젝트입니다."
    },
    {
      "id": "freshguard",
      "rank": 8,
      "title": "FreshGuard",
      "type": "Computer Vision",
      "categories": [
        "main",
        "ai",
        "vision"
      ],
      "cover": "assets/freshguard.png",
      "desc": "팀 프로젝트에서 스마트폰 촬영 과일 이미지 기반 신선도 판별 AI 서비스를 개발했습니다. 저는 YOLOv8n 탐지와 EfficientNet-B0 멀티태스크 분류를 연결한 2-stage CV 파이프라인을 담당했습니다.",
      "tags": [
        "YOLOv8n",
        "EfficientNet-B0",
        "PyTorch",
        "OpenCV",
        "Kaggle Dataset",
        "Multi-task Learning",
        "Post-processing"
      ],
      "media": [
        {
          "src": "assets/freshguard.png",
          "alt": "FreshGuard 사과 신선도 비교"
        },
        {
          "src": "assets/freshguard-pipeline.png",
          "alt": "FreshGuard 탐지와 분류 파이프라인"
        },
        {
          "src": "assets/freshguard-detail.png",
          "alt": "FreshGuard 상세 결과",
          "phone": true
        }
      ],
      "links": {
        "github": "https://github.com/Lova-clover/FreshGuard",
        "velog": "https://velog.io/@lova-clover/FreshGuard-YOLOv8-EfficientNet-B0로-구현한-과일-신선도-판별-시스템"
      },
      "metrics": [
        [
          "My Role",
          "팀 프로젝트 AI 모델 개발·CV 파이프라인 담당"
        ],
        [
          "Problem",
          "배경 노이즈와 촬영 환경 차이로 과일 종류와 신선도 판별이 흔들릴 수 있음"
        ],
        [
          "Build",
          "YOLOv8n 탐지 ROI와 EfficientNet-B0 멀티태스크 분류를 연결한 2-stage CV 파이프라인"
        ],
        [
          "Result",
          "Validation 기준 Fruit F1 0.993, Freshness F1 0.981 기록"
        ]
      ],
      "build": [
        "Kaggle Food Freshness Dataset을 기반으로 과일 종류와 신선도 라벨을 정리했습니다.",
        "이미지를 224x224로 resize하고 ImageNet mean/std 정규화, Flip, ColorJitter, Rotation 증강을 적용했습니다.",
        "EfficientNet-B0 backbone에 과일 종류 분류 head와 신선도 분류 head를 둔 멀티태스크 모델을 구현했습니다.",
        "fresh/rotten 2-class 학습 후 p_fresh 기준 후처리로 fresh/normal/rotten 3단계 결과를 만들었습니다.",
        "YOLOv8n 탐지 박스에서 ROI를 crop한 뒤 EfficientNet-B0로 과일 종류와 신선도를 판별하는 추론 흐름을 구성했습니다.",
        "Android 앱과 Flask 서버/API가 모델을 호출할 수 있도록 입력 이미지 형식, 추론 결과 구조, 반환값 기준을 정리했습니다."
      ],
      "impact": [
        "모델 성능은 아키텍처뿐 아니라 입력 ROI 품질, 전처리, 후처리 규칙에 크게 좌우된다는 점을 확인했습니다.",
        "앱·서버·AI 모델이 분리된 팀 프로젝트에서 모델 입출력 기준과 결과 형식을 명확히 정리해야 한다는 점을 배웠습니다.",
        "팀원들이 담당한 Android 앱과 Flask 서버/API 흐름에 맞춰 AI 모델을 연결하며, 모델을 실제 서비스 흐름 안에 배치하는 경험을 했습니다."
      ],
      "summary": "YOLOv8n으로 과일 영역을 탐지하고 EfficientNet-B0 멀티태스크 모델로 종류와 신선도를 함께 판별하는 2-stage 컴퓨터비전 파이프라인입니다.",
      "coverFit": "contain"
    },
    {
      "id": "prepit",
      "rank": 15,
      "title": "Prep.it",
      "type": "AI Interview",
      "categories": [
        "service",
        "ai",
        "automation"
      ],
      "cover": "assets/prepit-cover.png",
      "coverFit": "cover-top",
      "desc": "포트폴리오 PDF에서 프로젝트와 성과를 읽어 맞춤 질문, 모의 면접, 누적 코칭까지 이어주는 AI 면접 연습 플랫폼입니다.",
      "tags": [
        "FastAPI",
        "OpenAI API",
        "PDF",
        "Docker"
      ],
      "media": [
        {
          "src": "assets/prepit-cover.png",
          "alt": "Prep.it 서비스 커버"
        },
        {
          "src": "assets/prepit-dashboard.png",
          "alt": "Prep.it 대시보드 화면"
        },
        {
          "src": "assets/prepit-interview.png",
          "alt": "Prep.it 모의 면접 화면"
        }
      ],
      "links": {},
      "metrics": [
        [
          "My Role",
          "개인 기획·백엔드 구현"
        ],
        [
          "Problem",
          "포트폴리오 기반 면접 대비의 반복 비용"
        ],
        [
          "Build",
          "PDF 분석과 8유형 질문 생성"
        ],
        [
          "Result",
          "fallback · DB 전환 · Docker 구조"
        ]
      ],
      "build": [
        "포트폴리오 PDF에서 프로젝트, 역할, 성과를 추출해 면접 질문으로 변환했습니다.",
        "기술 트레이드오프, 정량 성과, 꼬리질문 등 8유형 질문을 생성했습니다.",
        "OpenAI API 키가 없어도 heuristic fallback으로 질문 생성 흐름이 끊기지 않게 구성했습니다.",
        "SQLite와 PostgreSQL 전환, /healthz 기반 Docker 배포까지 서비스 운영 흐름을 붙였습니다."
      ],
      "impact": [
        "AI 기능이 끊겨도 서비스 흐름이 유지되는 fallback 설계의 중요성을 확인했습니다.",
        "SQLite와 PostgreSQL 전환, Docker health check 기반 배포 흐름을 구성했습니다."
      ]
    },
    {
      "id": "perfacto",
      "rank": 4,
      "title": "PerfactoAI & CPR",
      "type": "AI Automation SaaS",
      "categories": [
        "main",
        "service",
        "automation",
        "ai"
      ],
      "cover": "assets/perfacto-streamlit.png",
      "coverFit": "contain",
      "desc": "팀 프로젝트에서 스크립트 기반 쇼츠 생성 자동화와 CPR(CareProof Record) 운영 구조를 연결한 AI Automation SaaS형 프로젝트를 개발했습니다. 저는 개발 파트를 맡아 RAG·다중 페르소나 기반 생성 흐름, 컷 분할·TTS/STT·자막·FFmpeg 합성 파이프라인, Streamlit 생성 화면, YouTube 업로드 흐름, FastAPI·PostgreSQL 기반 이벤트 로그 구조, 링크·QR 배포와 동의·열람·이수 기록 흐름을 구현했습니다.",
      "tags": [
        "Python",
        "Streamlit",
        "FastAPI",
        "RAG",
        "Multi-Persona",
        "FFmpeg",
        "PostgreSQL",
        "Audit Log"
      ],
      "media": [
        {
          "src": "assets/perfacto-streamlit.png",
          "alt": "PerfactoAI Streamlit 실행 화면",
          "caption": "Streamlit MVP · RAG/페르소나 설정과 스크립트 기반 생성 실행"
        },
        {
          "src": "assets/perfacto-sample-frame.png",
          "alt": "PerfactoAI 생성 영상 샘플 화면",
          "caption": "생성 결과 샘플 · 이미지, 음성, 자막을 합성한 쇼츠 프레임"
        },
        {
          "src": "assets/perfacto-admin-console.png",
          "alt": "WAVE-LAB CPR 데모 운영 화면",
          "caption": "WAVE-LAB CPR · 콘텐츠 배포와 운영 로그를 확인하는 데모 화면"
        }
      ],
      "metrics": [
        [
          "My Role",
          "팀 프로젝트 개발 파트 담당"
        ],
        [
          "Problem",
          "영상 제작 자동화와 배포 이후 동의·열람·이수 증빙이 분리되어 운영 기준과 KPI를 추적하기 어려움"
        ],
        [
          "Build",
          "RAG·다중 페르소나 생성 흐름과 TTS/STT, 자막 타이밍, FFmpeg 합성을 연결하고 링크·QR 배포·이벤트 로그·KPI 추적 구조 설계"
        ],
        [
          "Result",
          "WAVE-LAB 장려상 수상 및 영상 자동화를 CPR 운영형 SaaS 구조로 확장"
        ]
      ],
      "build": [
        "스크립트 입력, 컷 분할, 이미지 검색/생성, TTS/STT, 자막 타이밍, FFmpeg 합성까지 이어지는 쇼츠 생성 파이프라인을 구현했습니다.",
        "RAG와 다중 AI 페르소나 설정을 적용해 목적과 대상에 맞는 콘텐츠 생성 흐름을 구성했습니다.",
        "Streamlit 화면에서 페르소나 선택, 스크립트 생성, 결과 확인, 영상 생성, YouTube 업로드 흐름을 연결했습니다.",
        "CPR로 확장하며 표준 템플릿, 버전 기준, 링크·QR 배포, 대상자 세그먼트, 동의·이해도 체크, 열람·이수 이벤트 로그를 운영 데이터로 남기는 구조를 설계했습니다.",
        "이벤트 로그 스키마를 통해 누가, 언제, 무엇을, 어떤 버전으로 확인했는지 남길 수 있는 감사·증빙 구조를 정리했습니다.",
        "FastAPI, PostgreSQL, 스케줄러, 이벤트 로그 모델링을 기반으로 이수율, 미열람, 재안내, 문의율 같은 KPI를 추적할 수 있는 구조를 정리했습니다."
      ],
      "impact": [
        "단순 생성 자동화보다 생성, 배포, 동의, 열람, 이수, 로그, 개선 흐름을 함께 설계할 때 서비스 가치가 커진다는 점을 확인했습니다.",
        "RAG와 다중 페르소나를 적용하면서 생성형 AI가 단순 답변 도구가 아니라 목적별 콘텐츠 운영 시스템으로 확장될 수 있다는 점을 경험했습니다.",
        "PM, 디자인, 리서치, 마케팅·법무 파트와 협업하며 개발 기능을 실제 운영 흐름에 맞게 구조화하는 경험을 했습니다.",
        "기획된 아이디어를 영상 자동화와 CPR 운영 구조로 끌고 가며, 팀 프로젝트 안에서 구현과 구조 설계의 중심 역할을 맡았습니다."
      ],
      "summary": "RAG·페르소나 기반 쇼츠 생성부터 TTS/STT·FFmpeg 합성, 배포 후 동의·열람·이수 기록까지 연결한 AI 자동화 프로젝트입니다."
    },
    {
      "id": "anemia",
      "rank": 7,
      "title": "AnemiaDetection",
      "type": "Medical Vision",
      "categories": [
        "main",
        "ai",
        "vision"
      ],
      "cover": "assets/anemiadetection.png",
      "coverFit": "phone",
      "desc": "팀 프로젝트에서 결막 이미지 기반 빈혈 판별 시스템을 개발했습니다. 저는 ResNet18 전이학습 모델과 Streamlit 웹 추론 데모를 담당했고, RGB thresholding 판정과 딥러닝 예측을 함께 활용하는 Hybrid AI System 방향을 검토했습니다.",
      "tags": [
        "Python",
        "PyTorch",
        "ResNet18",
        "Streamlit",
        "OpenCV",
        "RGB Thresholding",
        "5-Fold CV"
      ],
      "media": [
        {
          "src": "assets/anemiadetection.png",
          "alt": "AnemiaDetection 지표 화면",
          "phone": true
        },
        {
          "src": "assets/anemia-conjunctiva-result.png",
          "alt": "AnemiaDetection 결막 입력과 예측 결과",
          "phone": true
        }
      ],
      "links": {
        "github": "https://github.com/Lova-clover/AnemiaDetection_web",
        "velog": "https://velog.io/@lova-clover/실시간-결막-이미지-기반-빈혈-판별-웹앱-개발기",
        "demo": {
          "href": "https://anemiadetection.streamlit.app/",
          "label": "Streamlit Demo"
        }
      },
      "metrics": [
        [
          "My Role",
          "팀 프로젝트 ResNet18 모델 학습·Streamlit 웹 데모 담당"
        ],
        [
          "Problem",
          "촬영 환경에 따라 결막 색상과 밝기가 달라져 단일 기준 판정이 흔들릴 수 있음"
        ],
        [
          "Build",
          "ResNet18 기반 빈혈 판별 모델을 학습하고 Streamlit 추론 데모로 연결"
        ],
        [
          "Result",
          "5-Fold CV로 성능을 검증하고 ResNet18 기반 공개 웹앱으로 배포"
        ]
      ],
      "build": [
        "결막 이미지 기반 빈혈 판별을 위해 ResNet18 전이학습 모델을 구현했습니다.",
        "이미지 증강과 학습 설정을 적용하고 5-Fold CV로 모델 성능을 비교·검증했습니다.",
        "Streamlit 웹앱에서 입력 이미지, 모델 예측 결과, 예측 확률을 확인할 수 있도록 구현했습니다.",
        "팀원이 구현한 RGB thresholding 판정 결과와 모델 예측 결과를 함께 활용하는 하이브리드 판별 구조를 검토했습니다."
      ],
      "impact": [
        "의료 이미지에서는 모델 성능뿐 아니라 촬영 환경, 색상 기준, 밝기 보정, 입력 가이드가 결과 신뢰도에 영향을 준다는 점을 배웠습니다.",
        "규칙 기반 판정과 딥러닝 예측을 하나의 서비스 흐름으로 연결하는 팀 프로젝트 구조를 경험했습니다."
      ],
      "summary": "결막 이미지로 빈혈 가능성을 판별하는 팀 프로젝트입니다. ResNet18 전이학습 모델과 Streamlit 웹 추론 데모를 담당했습니다."
    },
    {
      "id": "rulevest",
      "rank": 16,
      "title": "RuleVest",
      "type": "Finance Helper",
      "categories": [
        "all",
        "service",
        "ai"
      ],
      "cover": "assets/rulevest-home.png",
      "coverFit": "contain",
      "desc": "투자 데이터를 업로드하면 구조를 해석하고 지표, 차트, 분석 요약을 자동 구성하는 Skills 기반 대시보드입니다.",
      "tags": [
        "Skills.md",
        "Data Viz",
        "GitHub Pages",
        "Frontend"
      ],
      "media": [
        {
          "src": "assets/rulevest-home.png",
          "alt": "RuleVest 홈 화면"
        },
        {
          "src": "assets/rulevest-dashboard.png",
          "alt": "RuleVest 대시보드"
        }
      ],
      "links": {
        "github": "https://github.com/Lova-clover/RuleVest",
        "demo": "https://lova-clover.github.io/RuleVest/",
        "velog": "https://velog.io/@lova-clover/%ED%88%AC%EC%9E%90-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C%EB%A5%BC-%EB%A7%8C%EB%93%A4%EB%A9%B0-%EB%B0%B0%EC%9A%B4-%EA%B2%83-RuleVest-%ED%9A%8C%EA%B3%A0"
      },
      "metrics": [
        [
          "My Role",
          "개인 기획·프론트 구현"
        ],
        [
          "Problem",
          "투자 데이터 구조와 판단 기준의 분산"
        ],
        [
          "Build",
          "Skills.md 기반 자동 분석 대시보드"
        ],
        [
          "Result",
          "1차 투표 7위 · 2차 심사 탈락 회고"
        ]
      ],
      "build": [
        "CSV, JSON, TSV, XLSX 업로드 후 날짜, 자산, 수익률, 벤치마크, 거래량 같은 컬럼 역할을 추론하도록 설계했습니다.",
        "Skills.md에 정의한 분석 규칙을 바탕으로 KPI, 차트, 분석 요약, 원본 데이터 검색 흐름을 대시보드에 연결했습니다.",
        "GitHub Pages에서 바로 실행되도록 브라우저 안에서 데이터를 읽고 분석하는 구조로 구현했습니다."
      ],
      "impact": [
        "1차 투표에서 7위를 기록했지만 2차 심사에서 탈락하며, 구현물만큼 문제 정의와 평가 기준 대응이 중요하다는 점을 정리했습니다.",
        "다시 만든다면 단순 자동 시각화가 아니라 수익률 뒤의 위험 구조를 해석하는 투자 리스크 대시보드로 재정의해야 한다고 회고했습니다."
      ]
    },
    {
      "id": "structure",
      "rank": 17,
      "title": "Structure Stability AI",
      "type": "DACON Competition",
      "categories": [
        "all",
        "ai",
        "vision"
      ],
      "cover": "assets/structure-result.png",
      "coverFit": "contain",
      "desc": "구조물 안정성 물리 추론 AI 경진대회에서 두 시점 이미지 기반 안정성 예측 전략을 검증했습니다.",
      "tags": [
        "DACON",
        "Physics",
        "CV",
        "OOF"
      ],
      "media": [
        {
          "src": "assets/structure-result.png",
          "alt": "구조물 안정성 AI 경진대회 결과와 검증 기록"
        }
      ],
      "links": {
        "github": "https://github.com/Lova-clover/Dacon-Structural-Stability",
        "velog": "https://velog.io/@lova-clover/%ED%9A%8C%EA%B3%A0-%EA%B5%AC%EC%A1%B0%EB%AC%BC-%EC%95%88%EC%A0%95%EC%84%B1-AI-%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C-OOF%EB%8A%94-%EC%A2%8B%EC%95%98%EB%8A%94%EB%8D%B0-%EC%99%9C-Public%EC%9D%80-%ED%8B%80%EB%A0%B8%EC%9D%84%EA%B9%8C",
        "site": {
          "href": "https://dacon.io/competitions/official/236686/leaderboard",
          "label": "DACON 대회 페이지"
        }
      },
      "metrics": [
        [
          "My Role",
          "개인 모델링·검증 전략"
        ],
        [
          "Problem",
          "두 시점 이미지 기반 안정성 예측"
        ],
        [
          "Build",
          "검증 전략과 확률 예측 분석"
        ],
        [
          "Result",
          "Private 12위 기록"
        ]
      ],
      "build": [
        "두 시점 이미지를 기반으로 안정성을 예측하는 모델링 전략을 검토했습니다.",
        "OOF와 Public/Private 차이를 분석하며 검증 전략의 중요성을 정리했습니다.",
        "확률 예측의 안정성과 리더보드 흔들림을 회고 글로 남겼습니다."
      ],
      "impact": [
        "대회에서는 모델 선택뿐 아니라 검증 데이터 설계와 확률 보정이 결과를 크게 좌우한다는 점을 배웠습니다.",
        "Private 12위 기록을 통해 실험 관리와 검증 전략의 중요성을 다시 확인했습니다."
      ]
    },
    {
      "id": "classcue",
      "rank": 18,
      "title": "ClassCue",
      "type": "Teaching Intelligence",
      "categories": [
        "all",
        "service",
        "ai"
      ],
      "cover": "assets/classcue-cover.png",
      "coverFit": "contain",
      "desc": "수업 직후 강의 자료, 학생 질문, 교강사 메모를 하나의 세션으로 묶고, AI가 오개념과 근거·개입안을 제안한 뒤 교강사가 승인해 학습자와 운영자에게 전달하는 교육 운영 서비스입니다.",
      "tags": [
        "Next.js",
        "TypeScript",
        "OpenAI-compatible",
        "HITL",
        "Fallback"
      ],
      "media": [
        {
          "src": "assets/classcue-cover.png",
          "alt": "ClassCue 서비스 커버",
          "caption": "ClassCue 서비스 커버"
        },
        {
          "src": "assets/classcue-dashboard.png",
          "alt": "ClassCue 운영 현황 대시보드",
          "caption": "운영 현황 대시보드 · 분석 완료, 대기, 단축 시간, 전체 세션 지표"
        },
        {
          "src": "assets/classcue-input.png",
          "alt": "ClassCue 질문 입력과 데모 데이터 화면",
          "caption": "질문 입력 화면 · 학생 질문과 교강사 관찰 노트를 묶는 흐름"
        },
        {
          "src": "assets/classcue-analysis.png",
          "alt": "ClassCue 분석 사례와 승인 흐름",
          "caption": "활용 사례 화면 · 실제 수업 정리와 후속 안내로 이어지는 흐름"
        }
      ],
      "links": {
        "github": "https://github.com/Lova-clover/ClassCue",
        "velog": "https://velog.io/@lova-clover/회고-KIT-바이브코딩-공모전에서-ClassCue를-끝까지-제출하며-배운-것들",
        "site": {
          "href": "http://koreaitac.com/2025/landing/vibe_coding.asp",
          "label": "KIT 공모전 페이지"
        }
      },
      "metrics": [
        [
          "My Role",
          "개인 기획·서비스 구현"
        ],
        [
          "Problem",
          "수업 후 재설명 지점과 개입 우선순위 판단이 흩어짐"
        ],
        [
          "Build",
          "자료·질문·메모 → 오개념 분석 → 교강사 승인"
        ],
        [
          "Result",
          "복습 가이드·미니 퀴즈·운영 브리프 연결"
        ]
      ],
      "build": [
        "강의 자료, 학생 질문, 교강사 메모를 하나의 세션으로 묶어 수업 직후 판단에 필요한 입력을 구조화했습니다.",
        "AI가 오개념 클러스터, 근거 인용, 위험도, 다음 수업 개입안, 미니 퀴즈를 함께 제안하도록 분석 흐름을 구성했습니다.",
        "AI 결과를 바로 공유하지 않고 교강사가 수정·확정하는 Human-in-the-loop 승인 단계를 두었습니다.",
        "학습자 복습 가이드, 교강사 승인 화면, 운영자 브리프와 인박스로 이어지는 역할별 결과 화면을 설계했습니다.",
        "Primary Model, Fast Model, Fallback 구조와 /api/health, /api/ready 점검 흐름을 두어 운영 안정성을 설명할 수 있게 정리했습니다."
      ],
      "impact": [
        "교육 AI는 단순 요약보다 교강사의 다음 행동을 돕는 의사결정 레이어가 중요하다는 점을 배웠습니다.",
        "AI 결과에 근거와 승인 절차를 붙여야 교육 현장에서 신뢰 가능한 흐름으로 읽힌다는 점을 확인했습니다.",
        "LMS 전체를 다시 만들기보다 수업 직후의 좁은 문제를 정확히 잡는 방식이 더 설득력 있다는 점을 확인했습니다."
      ]
    },
    {
      "id": "roboescape",
      "rank": 19,
      "title": "RoboEscape",
      "type": "Algorithm Game",
      "categories": [
        "all",
        "ai"
      ],
      "cover": "assets/roboescape-cover.png",
      "coverFit": "contain",
      "desc": "Bug, APF, PRM, RRT, Belief 등 경로 계획 알고리즘을 적 AI로 시각화한 교육용 액션 게임입니다.",
      "tags": [
        "Python",
        "Pygame",
        "Path Planning",
        "Algorithm"
      ],
      "media": [
        {
          "src": "assets/roboescape-cover.png",
          "alt": "RoboEscape 교육용 게임 커버"
        },
        {
          "src": "assets/roboescape-ingame.png",
          "alt": "RoboEscape 알고리즘 게임 실제 플레이 화면"
        }
      ],
      "links": {
        "github": "https://github.com/Lova-clover/RoboEscape-Path-Planning",
        "velog": "https://velog.io/@lova-clover/RoboEscape-Algorithm-Hunters-7%EA%B0%80%EC%A7%80-Path-Planning-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A0-%EA%B5%90%EC%9C%A1%EC%9A%A9-%EA%B2%8C%EC%9E%84"
      },
      "metrics": [
        [
          "My Role",
          "개인 기획·게임 구현"
        ],
        [
          "Problem",
          "경로 계획 알고리즘의 차이를 체감하기 어려움"
        ],
        [
          "Build",
          "7가지 알고리즘을 적 AI와 시각화로 구현"
        ],
        [
          "Result",
          "6개 스테이지와 보스전 기반 학습 게임"
        ]
      ],
      "build": [
        "Bug1, Bug2, Tangent Bug, APF, PRM, RRT, Belief Localization을 각각 다른 추적 패턴으로 구현했습니다.",
        "PRM 로드맵, RRT 트리, Belief 확률 분포처럼 알고리즘 내부 상태를 게임 안에서 시각화했습니다.",
        "플레이어가 벽, 노이즈, 슬로우모션을 활용해 알고리즘의 약점을 체감하도록 스테이지를 구성했습니다."
      ],
      "impact": [
        "알고리즘을 설명하는 것보다 직접 상호작용하게 만들 때 학습 경험이 더 강해진다는 점을 확인했습니다.",
        "게임 구조 안에서도 자료구조, 경로 탐색, 확률 추론을 자연스럽게 드러낼 수 있었습니다."
      ]
    },
    {
      "id": "gyeopbom",
      "rank": 1,
      "title": "겹봄 (GyeopBom)",
      "type": "Care Coordination",
      "categories": [
        "main",
        "service"
      ],
      "cover": "assets/projects/gyeopbom/overview.png",
      "coverFit": "contain",
      "desc": "부모와 자녀를 함께 돌보는 광주의 직장인을 위한 일정 조정 프로토타입입니다. 가족 건강 캘린더에서 출발해, 돌봄과 근무가 겹친 뒤 누구에게 연락하고 무엇을 준비할지 안내하는 서비스로 문제를 좁혔습니다.",
      "tags": [
        "Vanilla JavaScript",
        "Node.js",
        "PWA",
        "Chart.js",
        "Public Data"
      ],
      "media": [
        {
          "src": "assets/projects/gyeopbom/overview.png",
          "alt": "겹봄 로고와 실제 모바일 서비스 화면을 담은 기존 발표 자료",
          "caption": "서비스 소개 · 기존 발표 자료에 포함된 모바일 화면"
        },
        {
          "src": "assets/projects/gyeopbom/home.png",
          "alt": "겹봄의 가족 일정과 근무·돌봄 충돌을 보여주는 모바일 홈 화면",
          "caption": "실제 로컬 데모 · 가족 일정과 충돌 후 다음 행동 안내",
          "phone": true
        },
        {
          "src": "assets/projects/gyeopbom/submitted-sms.png",
          "alt": "겹봄 HC-008 제출본의 예약 문자 분석과 날짜·시간·대상자 추출 화면",
          "caption": "HC-008 제출본 재실행 · 내장 예시 문자를 로컬에서 분석한 결과",
          "phone": true
        },
        {
          "src": "assets/projects/gyeopbom/submitted-calendar.png",
          "alt": "겹봄 HC-008 제출본의 가족 캘린더와 근무·돌봄 겹침 표시",
          "caption": "HC-008 제출본 재실행 · 가족별 일정과 겹침 날짜를 표시한 캘린더",
          "phone": true
        },
        {
          "src": "assets/projects/gyeopbom/resolution.png",
          "alt": "겹봄에서 일정 변경과 직접돌봄 준비 경로를 안내하는 모바일 화면",
          "caption": "실제 로컬 데모 · TIME 권장 경로와 DIRECT 대안 안내",
          "phone": true
        },
        {
          "src": "assets/projects/gyeopbom/flow.png",
          "alt": "겹봄 발표자료의 CARE TIME DIRECT 해결 경로",
          "caption": "기존 발표자료 · 충돌 이후의 다음 행동을 연결하는 세 경로"
        },
        {
          "src": "assets/projects/gyeopbom/award.jpg",
          "alt": "2026 호남IS 코딩챌린지 행사장에서 촬영한 대상 수상 보드",
          "caption": "2026.08.21 · 호남IS 코딩챌린지 대상 수상 현장"
        }
      ],
      "links": {
        "site": {
          "href": "https://www.jica.or.kr/2025/inner.php?mode=view&no=318&sMenu=A6000",
          "label": "공식 수상 기사"
        }
      },
      "metrics": [
        [
          "My Role",
          "문제 정의부터 구현·검증·발표까지 1인 수행"
        ],
        [
          "Problem",
          "돌봄과 근무 충돌 뒤의 행동 공백"
        ],
        [
          "Build",
          "공유 EVENT · 조건별 상태 전이 · 로컬 파서"
        ],
        [
          "Result",
          "51명 개인전 · 대상(전주시장상)"
        ]
      ],
      "build": [
        "홈·캘린더·리포트·해결 화면이 하나의 EVENT 상태를 공유합니다. 일정 등록과 문의 결과가 충돌 건수와 다음 행동에 함께 반영됩니다.",
        "공공돌봄 확인(CARE) → 일정 변경 요청(TIME) → 직접돌봄 준비(DIRECT) 중 필요한 단계부터 안내합니다. 대상자 조건과 문의 결과에 따라 경로를 바꾸고, 기관 문의 체크리스트와 요청문을 제공합니다.",
        "예약 문자의 날짜·시간·병원·대상자를 로컬 파서로 추출합니다. 사용자가 확인한 뒤 저장·충돌 재계산을 수행하며, 건강 문자를 외부 LLM에 전송하지 않습니다.",
        "HC-008 제출본에 Node.js 공공데이터 게이트웨이와 내장 출처 데이터 fallback, localStorage·PWA·Chart.js 리포트를 구현했습니다. 기초조건 분기·로컬 파서 테스트 4건을 통과했습니다."
      ],
      "impact": [
        "2026.08.20–21 호남IS 코딩챌린지 51명 개인전에서 대상(전주시장상)을 받았습니다. 개인 노트북·사전 코드 없이 현장 10시간 동안 서비스, 소스, 발표자료, 시연영상, AI 활용 기록을 완성했습니다.",
        "기능 수보다 ‘직장인에게 필요한 다음 행동’을 기준으로 범위를 정했습니다. 빠르게 확인·수정할 수 있는 Vanilla JavaScript를 선택하고, 복지 자격과 기관 수용 여부의 최종 판단은 공식 창구에 남겼습니다.",
        "전주정보문화산업진흥원 공식 결과 기사에서 충돌 이후 행동을 다룬 문제 정의와 실행형 서비스 설계가 심사평으로 소개됐습니다.",
        "현재는 localStorage에 평문으로 저장하는 프로토타입입니다. 계정·권한과 기관 접수 연동은 없으며, 실제 보호자·기관의 사용성 검증이 다음 단계입니다."
      ],
      "summary": "돌봄과 근무가 겹친 뒤, 공공돌봄 확인·일정 변경·직접돌봄 준비를 연결합니다. 현장 10시간 동안 1인 구현한 대상 수상작입니다."
    },
    {
      "id": "risk-rehearse",
      "rank": 11,
      "title": "RISK:REHEARSE",
      "type": "LLM Decision Support",
      "categories": [
        "ai",
        "service"
      ],
      "cover": "assets/projects/risk-rehearse/landing.png",
      "coverFit": "contain",
      "desc": "금융상품 설명과 고객의 자기 설명을 조항·원문 근거로 검증하고, 손실 계산과 직원 검토까지 연결하는 LLM 기반 위험 검토 MVP입니다.",
      "tags": [
        "Next.js",
        "OpenAI Responses",
        "Turso/libSQL",
        "근거 검증"
      ],
      "media": [
        {
          "src": "assets/projects/risk-rehearse/landing.png",
          "alt": "RISK:REHEARSE 공개 서비스의 랜딩 첫 화면",
          "caption": "실제 공개 서비스 · 서명하기 전 위험을 확인하는 리스크 리허설"
        },
        {
          "src": "assets/projects/risk-rehearse/rehearsal-start.png",
          "alt": "RISK:REHEARSE 가상 리허설 시작과 손실 계산 안내 화면",
          "caption": "실제 브라우저 캡처 · 합성 금융상품을 사용하는 등록 예시 데모 화면"
        },
        {
          "src": "assets/projects/risk-rehearse/review-record-mobile.png",
          "alt": "RISK:REHEARSE 모바일 가상 증표 사용과 검토 기록 화면",
          "caption": "실제 브라우저 캡처 · 가상 증표의 일회 사용과 검토 기록",
          "phone": true
        }
      ],
      "links": {
        "site": {
          "href": "https://risk-rehearse.vercel.app",
          "label": "Demo"
        }
      },
      "metrics": [
        [
          "Problem",
          "위험 설명과 고객 이해를 확인하는 근거의 부재"
        ],
        [
          "Build",
          "원문 근거 검증 · 손실 계산 · 안전 정책 · 직원 검토"
        ],
        [
          "Stack",
          "Next.js · TypeScript · OpenAI Responses · libSQL"
        ],
        [
          "Result",
          "불일치·불충분한 근거를 보류 또는 직원 검토로 연결"
        ]
      ],
      "build": [
        "LLM이 입력 원문의 문장을 근거로 선택하도록 응답 스키마를 제한하고, 서버에서 위험 코드·조항 ID·원문 일치 여부를 다시 검증했습니다.",
        "손실 계산과 정책 판단을 LLM에서 분리했습니다. 판매 설명, 고객 자기 설명, 손실 금액을 각각 확인하고 불일치나 부족한 근거는 보류 또는 직원 검토로 연결합니다.",
        "직원 확인과 검토 기록을 Turso/libSQL에 저장하고, 선행 조건을 재검증한 뒤 일회용 가상 증표를 발급하는 흐름을 구현했습니다."
      ],
      "impact": [
        "모델의 판정만 제시하지 않고 근거 검증과 정책 판단을 분리해, 어떤 설명이 부족하고 왜 검토가 필요한지 확인할 수 있도록 구성했습니다.",
        "합성 금융상품을 사용하는 교육·심사용 MVP이며 실제 투자 추천이나 계약 승인을 수행하지 않습니다. 등록 예시 데모와 실제 LLM 분석 모드를 구분합니다."
      ]
    },
    {
      "id": "cheotjari",
      "rank": 2,
      "title": "첫자리",
      "type": "Startup Decision Support",
      "categories": [
        "main",
        "ai",
        "service"
      ],
      "cover": "assets/projects/cheotjari/home.png",
      "coverFit": "contain",
      "media": [
        {
          "src": "assets/projects/cheotjari/home.png",
          "alt": "첫자리 실제 공개 서비스의 계약 전 상권 점검 첫 화면",
          "caption": "현재 공개 서비스 · 가게 계약 전 조건 점검 안내"
        },
        {
          "src": "assets/projects/cheotjari/intake.png",
          "alt": "첫자리의 실제 가게 조건과 비용 입력 화면",
          "caption": "실제 입력 화면 · 가게 조건, 비용과 목표, 상세 비용 입력"
        },
        {
          "src": "assets/projects/cheotjari/result-example.png",
          "alt": "첫자리 공개 서비스에서 제공하는 자리 점검 결과 예시",
          "caption": "현재 서비스의 시연용 결과 예시 · 실제 점포의 운영 성과나 예측 정확도가 아닙니다"
        },
        {
          "src": "assets/projects/cheotjari/proof.png",
          "alt": "첫자리의 실제 데이터 출처와 계산·AI 역할 안내 화면",
          "caption": "데이터 출처 화면 · 계산값과 API 참고 자료, AI 역할 구분"
        }
      ],
      "desc": "가게 계약 전 시작 자금·손익분기 주문 수·감당 가능한 월세·예산 부족액을 점검하는 예비창업자 의사결정 지원 서비스입니다.",
      "tags": [
        "Next.js",
        "TypeScript",
        "OpenAI",
        "Zod"
      ],
      "links": {
        "demo": "https://cheotjari.vercel.app/"
      },
      "metrics": [
        [
          "Problem",
          "계약 전 창업 비용과 운영 조건의 판단 어려움"
        ],
        [
          "Build",
          "비용 계산 · 근거 제한 AI · 규칙 기반 fallback"
        ],
        [
          "Result",
          "경기도 창업경진대회 장려상 · 예선 315팀 중 본선 9팀"
        ]
      ],
      "build": [
        "서버의 deterministic 계산 로직으로 시작 자금·손익분기 주문 수·월세 상한·예산 부족액을 산출했습니다. 상세 비용이 부족하면 계산 가능한 범위만 보여주도록 구성했습니다.",
        "OpenAI는 계산된 조건 안에서 허용된 해결 경로와 질문을 선택합니다. 응답 형식·질문·근거를 검증하고, 범위 밖 응답이나 API 실패 시 규칙 기반 결과로 전환합니다.",
        "Next.js·React·TypeScript로 입력부터 결과와 근거 확인까지 연결했습니다. 경기데이터드림 참고 자료, VWorld 주소 좌표, 상가정보 반경 조회를 각각의 사용 범위와 함께 표시합니다."
      ],
      "impact": [
        "2026년 경기도 공공데이터 AI 활용 창업경진대회 제품 및 서비스 개발 부문 장려상·경기도경제과학진흥원장상을 수상했습니다.",
        "예선 315팀 중 본선 9팀에 진출했습니다. 비용 계산과 AI 선택을 분리해 계산값과 확인이 필요한 조건을 함께 살펴볼 수 있도록 구현했습니다."
      ]
    },
    {
      "id": "jjikmuk",
      "rank": 6,
      "title": "찍먹AI",
      "type": "Multimodal Search",
      "categories": [
        "main",
        "ai",
        "service"
      ],
      "cover": "assets/projects/jjikmuk/results.png",
      "coverFit": "phone",
      "desc": "음식 사진을 멀티모달로 분석하고 Oracle Vector Search와 속성 재정렬을 거쳐 메뉴·옵션 후보로 연결하는 검색·추천 MVP입니다.",
      "tags": [
        "OCI Gemini",
        "Cohere Embed 4",
        "Oracle Vector Search",
        "Fastify"
      ],
      "media": [
        {
          "src": "assets/projects/jjikmuk/results.png",
          "alt": "찍먹AI 음식 분석 근거와 메뉴 후보 화면",
          "caption": "실제 브라우저 캡처 · 분석 근거와 메뉴 후보 확인",
          "phone": true
        },
        {
          "src": "assets/projects/jjikmuk/home.png",
          "alt": "찍먹AI 홈과 이미지 분석 진입 화면",
          "caption": "실제 브라우저 캡처 · 사진 입력으로 시작하는 탐색 흐름",
          "phone": true
        },
        {
          "src": "assets/projects/jjikmuk/options.png",
          "alt": "찍먹AI 메뉴 옵션 선택 화면",
          "caption": "실제 브라우저 캡처 · 합성 메뉴 카탈로그의 옵션 선택",
          "phone": true
        }
      ],
      "links": {},
      "metrics": [
        [
          "Problem",
          "음식 이름을 몰라 사진에서 주문 탐색이 끊기는 문제"
        ],
        [
          "Build",
          "멀티모달 분석 · 벡터 후보 검색 · 속성 재정렬"
        ],
        [
          "Stack",
          "React · Fastify · OCI · Oracle AI Database"
        ],
        [
          "Result",
          "분석부터 메뉴·옵션 선택, 장바구니까지 MVP 구현"
        ]
      ],
      "build": [
        "OCI Gemini의 이미지 분석 결과를 음식명 후보, 재료, 소스, 조리법 등의 구조화된 속성으로 검증합니다. 애매한 결과는 선택적 2차 판별과 사용자 확인으로 연결했습니다.",
        "Cohere Embed 4로 의미와 시각 근거를 각각 임베딩하고, Oracle AI Database의 벡터 후보 검색 뒤 속성 기반 재정렬로 메뉴 후보를 제공합니다.",
        "React 화면과 Fastify API를 연결하고, 비동기 작업 조회부터 후보 수정·옵션 선택·장바구니까지 이어지는 사용자 흐름을 구현했습니다."
      ],
      "impact": [
        "음식 인식만으로 끝내지 않고 검색 근거와 대체 후보, 옵션 선택까지 연결한 해커톤 MVP를 구현했습니다.",
        "요기요의 실제 메뉴·가격·재고 API는 연동하지 않았으며, 매장·가격·재고는 합성 카탈로그로 검증했습니다. 공개 실사진 평가도 자체 평가이며 상용 인식 정확도를 뜻하지 않습니다."
      ]
    },
    {
      "id": "portflow",
      "rank": 12,
      "title": "PortFlow Dispatch AI",
      "type": "Data · Decision Support",
      "categories": [
        "ai",
        "service"
      ],
      "cover": "assets/projects/portflow/overview.png",
      "coverFit": "contain",
      "desc": "항만·교통·기상 근거를 모아 출발·대기·우회 후보를 비교하고 기사 안내로 연결하는 배차 의사결정 프로토타입입니다.",
      "tags": [
        "JavaScript",
        "PWA",
        "Leaflet",
        "scikit-learn"
      ],
      "media": [
        {
          "src": "assets/projects/portflow/overview.png",
          "alt": "PortFlow 배차 의사결정 대시보드",
          "caption": "실제 프로토타입 화면 · 추천과 공공데이터 근거 요약"
        },
        {
          "src": "assets/projects/portflow/decision.png",
          "alt": "PortFlow 출발 대기 우회 비교 화면",
          "caption": "예시 시나리오 · 출발·대기·우회 후보와 판단 근거"
        },
        {
          "src": "assets/projects/portflow/driver.png",
          "alt": "PortFlow 기사 공유 화면",
          "caption": "선택한 배차안을 기사 안내 메시지와 공유 카드로 연결"
        },
        {
          "src": "assets/projects/portflow/mobile.png",
          "alt": "PortFlow 모바일 배차 판단 화면",
          "caption": "실제 프로토타입 화면 · 모바일 배차 의사결정",
          "phone": true
        }
      ],
      "links": {
        "demo": "https://portflow-alpha.vercel.app/"
      },
      "metrics": [
        [
          "Problem",
          "흩어진 항만·교통·기상 정보와 배차 판단"
        ],
        [
          "Build",
          "공공데이터 근거 · 시나리오 비교 · 기사 공유"
        ],
        [
          "Result",
          "배차 판단 PWA와 별도 유입량 예측 모델 구현"
        ]
      ],
      "build": [
        "공공데이터의 출처·수집 시각·특성 변환 근거를 정리하고, 출발·대기·우회 후보를 비교하는 의사결정 화면을 구현했습니다.",
        "JavaScript 기반 PWA에 Leaflet 지도와 OSRM 경로를 연결하고, 선택한 배차안을 기사 메시지와 PNG 공유 카드로 전달하는 흐름을 구성했습니다.",
        "별도 Python·Pandas·scikit-learn 파이프라인에서 공개 합성데이터를 사용해 30분 단위 유입량을 예측하고, 시간순 분할로 모델을 검증했습니다."
      ],
      "impact": [
        "공공데이터 조회에서 배차 후보 비교와 기사 안내까지 이어지는 프로토타입을 구현했습니다.",
        "화면의 대기시간·개선율은 예시 시나리오입니다. 별도 유입량 예측 모델이 산출한 운영 성과나 실제 현장 개선 수치로 제시하지 않습니다."
      ]
    },
    {
      "id": "movelens",
      "rank": 13,
      "title": "MoveLens",
      "type": "Mobility · Public Data",
      "categories": [
        "ai",
        "service"
      ],
      "cover": "assets/projects/movelens/home.png",
      "coverFit": "contain",
      "desc": "이동 시간·환승·날씨·접근성·저탄소 기준으로 경로를 비교하고, 시민의 불편 제보를 행정 개선 후보로 연결하는 모빌리티 프로토타입입니다.",
      "tags": [
        "React",
        "TypeScript",
        "Leaflet",
        "Public Data"
      ],
      "media": [
        {
          "src": "assets/projects/movelens/home.png",
          "alt": "MoveLens 홈의 이동 조건별 경로 비교 화면",
          "caption": "실제 프로토타입 · 평소 이동·비와 긴 도보·저탄소 조건 비교"
        },
        {
          "src": "assets/projects/movelens/routes.png",
          "alt": "MoveLens 지도와 사용자 기준에 따른 경로 검색 화면",
          "caption": "경로 비교 · 이동 조건과 선호 가중치에 따른 추천"
        },
        {
          "src": "assets/projects/movelens/admin.png",
          "alt": "MoveLens 시민 제보와 정책 개선 후보를 연결한 행정 대시보드",
          "caption": "행정 화면 · 정책 효과 수치는 프로토타입 시뮬레이션"
        },
        {
          "src": "assets/projects/movelens/mobile.png",
          "alt": "MoveLens 모바일 경로 비교 화면",
          "caption": "실제 모바일 화면 · 지도와 경로 비교",
          "phone": true
        }
      ],
      "links": {
        "demo": "https://movelens.vercel.app/"
      },
      "metrics": [
        [
          "Problem",
          "빠른 길만으로 설명하기 어려운 이동 부담"
        ],
        [
          "Build",
          "다기준 경로 점수 · 시민 제보 · 행정 개선 후보"
        ],
        [
          "Result",
          "세종특별자치시 데이터·AI 활용 경진대회 본선 진출 · 발표"
        ]
      ],
      "build": [
        "React·TypeScript 화면에 Leaflet 지도를 연결하고, 이동 시간·환승·날씨·접근성·저탄소의 다섯 기준과 사용자 가중치로 경로 점수와 추천 이유를 구성했습니다.",
        "CSV 이동 데이터와 지도·경로 API를 연결했습니다. 경로 저장과 시민 제보는 localStorage에 보관하고, 제보 유형과 상태를 행정 개선 우선순위에 반영했습니다.",
        "시민용 경로 비교·불편 제보와 행정용 개선 후보·정책 시뮬레이션을 하나의 프로토타입으로 연결했습니다."
      ],
      "impact": [
        "2026 세종특별자치시 데이터·AI 활용 경진대회 제품 및 서비스 개발 부문 본선에 진출해 발표했습니다.",
        "현재 범위는 프런트엔드 프로토타입입니다. 경로 점수와 정책 효과의 시연값을 실제 운행 성과나 학습 모델의 정확도로 제시하지 않습니다."
      ]
    },
    {
      "id": "twinops",
      "rank": 14,
      "title": "TwinOps Ulsan",
      "type": "Forecasting · Decision Support",
      "categories": [
        "ai",
        "service"
      ],
      "cover": "assets/projects/twinops/dashboard.png",
      "coverFit": "contain",
      "desc": "울산 산업단지의 대기 위험 예측과 원인 확인에서 역할별 조치 추천·What-if 비교·정책 리포트까지 연결하는 의사결정 MVP입니다.",
      "tags": [
        "React",
        "JavaScript",
        "Leaflet",
        "Time Series"
      ],
      "media": [
        {
          "src": "assets/projects/twinops/dashboard.png",
          "alt": "TwinOps Ulsan 산업단지 지도와 위험 우선순위 대시보드",
          "caption": "기존 MVP 실제 화면 · 산단별 위험과 우선 검토 조치"
        },
        {
          "src": "assets/projects/twinops/simulation.jpg",
          "alt": "TwinOps Ulsan 조치 강도에 따른 What-if 시뮬레이션",
          "caption": "What-if · 조치 효과는 규칙 기반 시나리오 계산값"
        },
        {
          "src": "assets/projects/twinops/data.jpg",
          "alt": "TwinOps Ulsan 공공데이터 상태와 예측 검증 화면",
          "caption": "실제 서비스 · 공식 관측과 자체 예측 검증 (2026.09.23 캡처)"
        },
        {
          "src": "assets/projects/twinops/mobile.png",
          "alt": "TwinOps Ulsan 모바일 산업단지 위험 확인 화면",
          "caption": "실제 모바일 MVP · 산단 위험과 추천 조치",
          "phone": true
        }
      ],
      "links": {
        "demo": "https://twinops-ulsan.vercel.app/"
      },
      "metrics": [
        [
          "Problem",
          "산단 위험 확인과 조치 판단 사이의 정보 단절"
        ],
        [
          "Build",
          "대기질 예측 · 기준 모델 비교 · 조치·시나리오 엔진"
        ],
        [
          "Result",
          "울산 디지털 트윈 활용 아이디어 공모전 본선 진출 · 발표"
        ]
      ],
      "build": [
        "Vercel Function에서 울산 공식 대기질을 수집·정규화하고, 관측 시각과 데이터 출처·대체 상태를 화면에 표시했습니다.",
        "측정소별 후보 선택과 시간순 검증을 분리해 3시간 뒤 대기 위험을 예측했습니다. 후보가 최근값 유지 기준보다 불리하면 기준 모델로 전환하도록 구성했습니다.",
        "역할별 조치 순위와 점수 기여도를 공개하고, 조치 강도에 따른 규칙 기반 What-if 결과를 추천과 정책 리포트에서 공유하도록 구현했습니다."
      ],
      "impact": [
        "2026 울산 디지털 트윈 활용 아이디어 공모전 본선에 진출해 발표했습니다.",
        "공식 대기질과 일부 교통·안전 시연값을 구분했습니다. What-if는 정책 가정에 따른 계산이며, 예측 검증은 자체 평가로 실제 정책 효과나 공식 대회 성적을 의미하지 않습니다."
      ]
    }
  ],
  "records": [
    [
      "2022~2026",
      "연세대학교 미래캠퍼스 소프트웨어학부 학사 수료",
      "소프트웨어 전공을 기반으로 Python, AI/Data, 백엔드 자동화 프로젝트를 이어가고 있습니다.",
      "Education",
      "var(--lemon)"
    ],
    [
      "2025.09",
      "2025학년도 WAVE-LAB Challenge 창업경진대회 장려상",
      "연세대학교 미래캠퍼스 RISE사업단 주관 대회에서 PerfactoAI와 CPR 운영형 SaaS 방향성을 제안했습니다.",
      "Startup",
      "var(--mint)"
    ],
    [
      "2025.11",
      "의료 AI 솔루션 코딩대회 결승(5차) [ChatGPT 활용] 2등",
      "연세대학교 의료AI반도체전문인력양성사업단 운영 대회에서 생성형 AI 활용과 직접 검증 역량을 증명했습니다.",
      "Coding",
      "var(--sky)"
    ],
    [
      "2025.12",
      "SW엔지니어소양세미나 우수상",
      "한국융합신호처리학회 주관 세미나에서 인공지능 융합기술·신호처리 분야 우수 역량을 인정받았습니다.",
      "Seminar",
      "var(--violet)"
    ],
    [
      "2025.12",
      "2025 강원도 대학생 AI 활용 창업 아이디어 공모전 장려상",
      "상지대학교 RISE사업단 벤처창업본부 주최 대회에 MediClear를 팀명 MediBridge로 출품했습니다.",
      "Startup",
      "var(--mint)"
    ],
    [
      "2026.01",
      "Track2 아이디어 개발 부문 K리그-서울시립대 공개 AI 경진대회 15위 · 장려상",
      "DACON 수상 인증서 기준 15/38을 기록하며 K-MOMENTO AI의 경기 흐름 분석 아이디어를 제안했습니다.",
      "Competition",
      "var(--mint)"
    ],
    [
      "2026.05",
      "2026 스마트 공장 운영 시스템 MVP 개발 본선 해커톤 3위",
      "DACON 수상 인증서 기준 3/163을 기록하며 LossTwin AI의 손실금액 기반 조치 ROI 흐름을 구현했습니다.",
      "Hackathon",
      "var(--sun)"
    ],
    [
      "2026.07",
      "2026년 경기도 공공데이터 AI 활용 창업경진대회 장려상",
      "가게 계약 전 창업 비용을 점검하는 ‘첫자리’로 제품 및 서비스 개발 부문에 참가해 경기도경제과학진흥원장상을 받았습니다.",
      "Startup",
      "var(--mint)"
    ],
    [
      "2026.08",
      "2026 제6기 광산구 지역사회보장계획 수립을 위한 주민아이디어 공모전 대상",
      "‘퇴근 후 복지정거장’을 제안해 광산구지역사회보장협의체 민간위원장상을 받았습니다.",
      "Grand Prize",
      "var(--sun)"
    ],
    [
      "2026.08",
      "2026년 공무원연금공단 AI·공공데이터 아이디어 공모전 우수상",
      "AI·공공데이터를 활용한 ‘공상케어 Re:Turn Signal’ 아이디어로 우수상을 받았습니다.",
      "Award",
      "var(--sky)"
    ],
    [
      "2026.08",
      "2026 호남 IS 코딩챌린지 대상",
      "51명이 1인 1팀으로 참가한 현장에서 ‘겹봄’을 약 10시간 동안 기획·구현해 전주시장상을 받았습니다.",
      "Grand Prize",
      "var(--sun)"
    ],
    [
      "2026.09",
      "2026년 한국수력원자력 공공데이터 활용 아이디어 공모전 장려상",
      "‘Re:Source N’으로 공공데이터 활용 아이디어를 제안해 장려상을 받았습니다.",
      "Award",
      "var(--mint)"
    ]
  ],
  "finalists": [
    {
      "id": "k-intelligence-track2",
      "date": "2025.09",
      "competition": "K-Intelligence Track 2 프롬프트 해커톤",
      "project": "MediClear",
      "result": "본선 진출",
      "detail": "예선 3등 · 본선 9등"
    },
    {
      "id": "incheon-startup",
      "date": "2026.07",
      "competition": "제12회 인천광역시 공공데이터·AI 활용 창업경진대회",
      "division": "제품 및 서비스 개발 부문",
      "project": "PortFlow Dispatch AI",
      "result": "본선 발표"
    },
    {
      "id": "sejong-data-ai",
      "date": "2026.07",
      "competition": "세종특별자치시 데이터·AI 활용 경진대회",
      "division": "제품 및 서비스 개발 부문",
      "project": "MoveLens",
      "result": "본선 발표"
    },
    {
      "id": "ulsan-digital-twin",
      "date": "2026.08",
      "competition": "울산 디지털 트윈 활용 아이디어 공모전",
      "project": "TwinOps Ulsan",
      "result": "본선 발표"
    },
    {
      "id": "yogiyo-oracle",
      "date": "2026.08",
      "competition": "요기요 × 오라클 해커톤 「맛있는 일상, AI로 잇(IT)다」",
      "project": "찍먹AI",
      "result": "본선 발표",
      "detail": "서류 지원 186팀 중 본선 8팀 선정"
    }
  ],
  "projectRoles": {
    "losstwin": {
      "mode": "개인 프로젝트",
      "label": "기여도",
      "contribution": "100%",
      "tasks": [
        "CNC 이상 시나리오 정의",
        "AI 이상 점수·손실금액 산출 로직",
        "ROI 비교·조치 추천 흐름",
        "React MVP 화면·시연 구성"
      ]
    },
    "devhistory": {
      "mode": "개인 프로젝트",
      "label": "기여도",
      "contribution": "100%",
      "tasks": [
        "활동 데이터 수집·정규화",
        "FastAPI 백엔드 설계",
        "Celery 작업 처리",
        "리포트·증빙 자동화"
      ]
    },
    "mediclear": {
      "mode": "개인 프로젝트 / 1인 팀 출품",
      "label": "기여도",
      "contribution": "100%",
      "tasks": [
        "퇴원 후 14일 관리 문제 정의",
        "RAG 기반 환자 안내문 생성 흐름 설계",
        "환자 모바일 웹과 관리자 대시보드 구현",
        "상태 체크·위험신호 관리 흐름 구조화"
      ]
    },
    "kmomento": {
      "mode": "개인 프로젝트",
      "label": "기여도",
      "contribution": "100%",
      "tasks": [
        "raw_data·match_info 전처리",
        "xG/xT 모멘텀 지표 설계",
        "SciPy Peak Detection 기반 전환점 탐지",
        "GPT-4 해설·스토리 카드 구성"
      ]
    },
    "freshguard": {
      "mode": "팀 프로젝트",
      "label": "내 역할",
      "contribution": "AI 모델 개발 및 CV 파이프라인 담당",
      "teammates": "Android 앱, Flask 서버/API 담당",
      "tasks": [
        "Kaggle Food Freshness Dataset 기반 전처리·학습·평가",
        "EfficientNet-B0 멀티태스크 분류 모델 구현",
        "과일 종류 10-class와 신선도 fresh/rotten 분류 학습",
        "p_fresh 기준 fresh/normal/rotten 3단계 후처리 규칙 정리",
        "YOLOv8n 탐지 ROI와 EfficientNet-B0 입력 연결",
        "서버 연동을 위한 모델 입력·출력 형식 정리"
      ]
    },
    "prepit": {
      "mode": "개인 프로젝트",
      "label": "기여도",
      "contribution": "100%",
      "tasks": [
        "PDF 분석 흐름 설계",
        "질문 생성 API 구현",
        "fallback 처리",
        "DB 전환·Docker 배포"
      ]
    },
    "perfacto": {
      "mode": "팀 프로젝트",
      "label": "내 역할",
      "contribution": "개발 파트 담당",
      "teammates": "PM·기획, 디자인, 리서치, 마케팅·법무 파트",
      "tasks": [
        "RAG·다중 페르소나 기반 콘텐츠 생성 흐름 구현",
        "스크립트 입력 → 컷 분할 → 이미지 검색/생성 → TTS/STT → 자막 → FFmpeg 합성 파이프라인 구현",
        "컷 전환 타이밍과 자막 타이밍 동기화",
        "Streamlit 기반 생성 화면 구성",
        "YouTube 업로드 흐름 구현",
        "FastAPI·PostgreSQL 기반 이벤트 로그 모델링",
        "링크·QR 배포와 버전·만료 기준 설계",
        "동의·이해도 체크, 열람·이수 로그, KPI 추적 구조 정리",
        "정책 기반 리마인더와 재시도 기록 흐름 설계"
      ]
    },
    "anemia": {
      "mode": "팀 프로젝트",
      "label": "내 역할",
      "contribution": "ResNet18 모델 학습 및 Streamlit 웹 데모 담당",
      "teammates": "RGB thresholding 판정 기준 구현·정리",
      "tasks": [
        "Kaggle 결막 이미지 데이터셋 기반 전처리·학습 구성",
        "ResNet18 전이학습 기반 분류 모델 구현",
        "이미지 증강 및 5-Fold CV 검증",
        "Streamlit 웹 추론 데모 구현",
        "예측 결과와 예측 확률 시각화",
        "RGB thresholding 판정과 모델 예측 결합 방향 검토"
      ]
    },
    "rulevest": {
      "mode": "개인 프로젝트",
      "label": "기여도",
      "contribution": "100%",
      "tasks": [
        "데이터 업로드 구조",
        "분석 규칙 설계",
        "대시보드 구현",
        "GitHub Pages 배포"
      ]
    },
    "structure": {
      "mode": "개인 프로젝트",
      "label": "기여도",
      "contribution": "100%",
      "tasks": [
        "이미지 기반 모델링",
        "OOF 검증 분석",
        "확률 예측 점검",
        "대회 회고 정리"
      ]
    },
    "classcue": {
      "mode": "개인 프로젝트",
      "label": "기여도",
      "contribution": "100%",
      "tasks": [
        "수업 직후 재수업 의사결정 문제 정의",
        "오개념·근거·개입안 AI 분석 흐름 설계",
        "교강사 승인 Human-in-the-loop UX",
        "복습 가이드·미니 퀴즈·운영 브리프 화면 구현",
        "Fallback·health/ready 점검 흐름 정리"
      ]
    },
    "roboescape": {
      "mode": "개인 프로젝트",
      "label": "기여도",
      "contribution": "100%",
      "tasks": [
        "경로계획 알고리즘 구현",
        "게임 시스템 설계",
        "시각화·상호작용",
        "데모 기록 정리"
      ]
    },
    "gyeopbom": {
      "mode": "개인 프로젝트 · 현장 코딩챌린지",
      "label": "내 역할",
      "contribution": "10시간 · 문제 정의부터 제출까지",
      "tasks": [
        "페르소나 기반 문제 재정의",
        "EVENT·상태 전이 설계",
        "예약 문자 파서·공공데이터 연결",
        "검증·시연영상·발표자료"
      ]
    }
  }
};
