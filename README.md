# RPG TO DO LIST

### **Requirements ของโปรเจค แอปพลิเคชัน To-Do List ผสมกับระบบ RPG**

---

#### **1. ระบบผู้ใช้ (User System)**

- **User Account:**
  - ผู้ใช้สามารถลงทะเบียนบัญชีใหม่ได้ด้วยการกรอกข้อมูลดังนี้:
    - ชื่อผู้ใช้ (username)
    - อีเมล (email)
    - รหัสผ่าน (password)
    - วันที่ลงทะเบียน (created_at) จะถูกบันทึกโดยอัตโนมัติ
  - ผู้ใช้สามารถเข้าสู่ระบบด้วยชื่อผู้ใช้หรืออีเมลและรหัสผ่านที่ลงทะเบียนไว้
  - ผู้ใช้สามารถสร้างตัวละคร (Character) ได้สูงสุด 3 ตัวละครต่อบัญชี

---

#### **2. ระบบตัวละคร (Character System)**

- **Character Creation:**

  - ผู้ใช้สามารถสร้างตัวละครได้ 3 ตัวต่อบัญชี
  - แต่ละตัวละครจะมีข้อมูลดังนี้:
    - ชื่อตัวละคร (name)
    - ค่าประสบการณ์ (exp)
    - ระดับ (level)
    - จำนวนเงินในเกม (coin)
    - ค่าพลังชีวิต (health)
    - ค่าพลังงาน (stamina)
    - ค่าจุดโฟกัส (focus_point)
- **Level Up:**

  - ตัวละครจะได้รับค่าประสบการณ์ (exp) เมื่อทำงาน (Work) หรือภารกิจ (Task) เสร็จสมบูรณ์
  - เมื่อสะสม exp ได้ถึงจำนวนที่กำหนด ตัวละครจะเลื่อนระดับ (level up) และได้รับแต้ม (point) สำหรับอัพเกรดความสามารถ (spacial)
- **Spacial System:**

  - เมื่อเลเวลตัวละครเพิ่มขึ้น ผู้ใช้จะได้รับแต้มที่สามารถนำไปอัพเกรดค่า Spacial ที่มีผลต่อการทำงานของตัวละคร
  - ค่า Spacial ที่สามารถอัพเกรดได้ ได้แก่:
    - ความแข็งแกร่ง (str) ส่งผลต่อจำนวนงานที่ทำได้
    - ความฉลาด (int) ส่งผลต่อ exp ที่ได้รับ
    - ความอดทน (end) ส่งผลต่อค่าสุขภาพ
    - ความคล่องตัว (agi) ส่งผลต่อการจัดการ deadline
    - ความรับผิดชอบ (dex) ส่งผลต่อการทำ Task

---

#### **3. ระบบงานและภารกิจ (Work and Task System)**

- **Work Management:**

  - ผู้ใช้สามารถเพิ่มงาน (Work) ได้สูงสุด 3 งานต่อหนึ่งตัวละคร
  - แต่ละงานจะมีข้อมูลดังนี้:
    - ชื่องาน (name)
    - คำอธิบายงาน (desc)
    - วันที่เริ่มงาน (start)
    - วันที่ครบกำหนดส่ง (due)
- **Task Management:**

  - ในแต่ละงานสามารถมีภารกิจย่อย (Task) ได้สูงสุด 10 ภารกิจ
  - ข้อมูลของ Task ประกอบด้วย:
    - ชื่อภารกิจ (name)
    - คำอธิบายภารกิจ (desc)
    - ระดับความยาก (difficulty)
    - วันที่เริ่มภารกิจ (start)
    - วันที่ครบกำหนดส่ง (due)
  - เมื่อ Task เสร็จสิ้น ตัวละครจะได้รับ exp และ coin ตามระดับความยากของ Task นั้น
  - เมื่อจบงาน (Work) จะได้รับ exp มากขึ้น

---

#### **4. ระบบโฟกัส (Focus Mode System)**

- **Focus Mode:**

  - ผู้ใช้สามารถเปิดใช้งานโหมดโฟกัสสำหรับการทำงานที่ต้องการความตั้งใจเป็นพิเศษ
  - ในโหมดโฟกัส ตัวละครจะใช้ค่าจุดโฟกัส (focus_point) สำหรับการทำงาน
  - การใช้ Focus Mode จะเพิ่มโอกาสในการสำเร็จงานและภารกิจในเวลาที่กำหนด
- **Focus Point:**

  - ค่าจุดโฟกัส (focus_point) สามารถได้รับจากการเลเวลอัพหรือตามเหตุการณ์พิเศษ

---

#### **5. ระบบการซื้อขายและไอเทม (Coin and Items System)**

- **Coin Earning:**

  - ผู้ใช้สามารถได้รับ Coin หลังจากเสร็จสิ้นภารกิจ (Task) และงาน (Work)
  - ปริมาณ Coin ที่ได้รับขึ้นอยู่กับระดับความยากของ Task และ Work
- **Item Purchase:**

  - ผู้ใช้สามารถใช้ Coin ที่ได้รับมาซื้อไอเทมในเกม ซึ่งจะช่วยเพิ่มประสิทธิภาพของตัวละครหรือช่วยในการทำงาน

---

#### **6. ระบบเควสประจำวัน/สัปดาห์ (Daily/Weekly Quests System)**

- **Daily/Weekly Quests:**
  - ผู้ใช้จะได้รับเควสพิเศษที่ต้องทำให้เสร็จในแต่ละวันหรือสัปดาห์
  - เควสเหล่านี้สามารถให้รางวัลพิเศษ เช่น exp, coin, หรือ item ที่มีค่ามากกว่าปกติ

---

#### **7. ระบบความสำเร็จ (Achievement System)**

- **Achievements:**
  - ผู้ใช้สามารถสะสมความสำเร็จจากการทำ Task, Work, หรือการอัพเกรดตัวละคร
  - ระบบความสำเร็จจะมีเป้าหมายหรือเงื่อนไขที่ต้องทำให้สำเร็จ เช่น "ทำ Task 100 ครั้งสำเร็จ" หรือ "เลเวลตัวละครถึงระดับ 10"
  - เมื่อบรรลุความสำเร็จ ผู้ใช้จะได้รับรางวัลพิเศษ

---

#### **8. ระบบเก็บสถิติ (Statistics System)**

- **User and Character Statistics:**
  - ระบบจะบันทึกสถิติของผู้ใช้และตัวละคร เช่น จำนวน Task ที่ทำเสร็จ จำนวนงานที่ทำสำเร็จ จำนวน exp และ coin ที่ได้รับ
  - สถิติเหล่านี้จะแสดงให้ผู้ใช้เห็นเพื่อให้ทราบภาพรวมของความก้าวหน้าในระบบ

---

### **การพัฒนาแอปพลิเคชัน**

- **Backend:**
  - ใช้ Express.js และ TypeScript สำหรับพัฒนา API และ Business Logic ทั้งหมด
- **Frontend:**
  - ใช้ SwiftUI สำหรับการพัฒนา UI/UX ที่รองรับการทำงานทั้งหมดของระบบ

### **ความคาดหวังของระบบ**

- ผู้ใช้จะสามารถจัดการการทำงานในชีวิตประจำวันได้อย่างมีประสิทธิภาพผ่านการทำงานในรูปแบบเกม RPG
- ระบบจะช่วยเพิ่มความสนุกและแรงจูงใจให้กับผู้ใช้ในการทำงานและบรรลุเป้าหมายที่ตั้งไว้

---

### **ERD**

```mermaid
erDiagram
    User {
        username str
        email str
        password str "ข้อมูลการเข้าสู่ระบบ"
        created_at datetime "วันที่ลงทะเบียน"
    }
  
    Character {
        id int "รหัสประจำตัวตัวละคร"
        name str
        exp int
        lv int
        coin int
        health int
        stamina int
        focus_point int
        user_id int "เชื่อมโยงกับ User"
    }
  
    Work {
        id int "รหัสประจำงาน"
        name str
        description str
        start_date datetime "วันที่เริ่มงาน"
        due_date datetime "กำหนดส่ง"
        status str "สถานะของงาน เช่น In Progress, Completed"
        character_id int "เชื่อมโยงกับ Character"
    }
  
    Task {
        id int "รหัสประจำภารกิจ"
        name str
        description str
        difficulty int "ความยากของภารกิจ"
        start_date datetime "วันที่เริ่มภารกิจ"
        due_date datetime "กำหนดส่งภารกิจ"
        status str "สถานะภารกิจ เช่น Not Started, In Progress, Completed"
        work_id int "เชื่อมโยงกับ Work"
    }
  
    Attribute {
        id int "รหัสประจำ Attribute"
        str int "ส่งผลต่อจำนวนงาน"
        int int "ส่งผลต่อ exp ที่ได้รับ"
        end int "ส่งผลต่อค่าสุขภาพ"
        agi int "ส่งผลต่อ deadline"
        dex int "ค่าความรับผิดชอบ"
        character_id int "เชื่อมโยงกับ Character"
    }

    Reward {
        id int "รหัสประจำรางวัล"
        type str "ประเภทของรางวัล เช่น Exp, Coin"
        amount int "จำนวนรางวัลที่ได้รับ"
        description str "รายละเอียดเพิ่มเติมของรางวัล"
        task_id int "เชื่อมโยงกับ Task"
    }

    Quest {
        id int "รหัสประจำเควส"
        name str
        description str
        type str "ประเภทของเควส เช่น Daily, Weekly"
        start_date datetime "วันที่เริ่มเควส"
        end_date datetime "วันที่สิ้นสุดเควส"
        status str "สถานะของเควส เช่น Not Started, In Progress, Completed"
        character_id int "เชื่อมโยงกับ Character"
        reward_id int "เชื่อมโยงกับ Reward"
    }

    Achievement {
        id int "รหัสประจำความสำเร็จ"
        name str
        description str
        criteria str "เงื่อนไขในการได้รับความสำเร็จ"
        reward_id int "เชื่อมโยงกับ Reward"
        character_id int "เชื่อมโยงกับ Character"
        achieved_at datetime "วันที่ได้รับความสำเร็จ"
        condition_id int "เชื่อมโยงกับ Condition"
    }

    Condition {
        id int "รหัสเงื่อนไขความสำเร็จ"
        name str "ชื่อเงื่อนไข เช่น เควสสำเร็จ, จำนวนภารกิจที่ทำ"
        description str "รายละเอียดของเงื่อนไข"
        threshold int "ค่าที่ต้องบรรลุ เช่น ทำเควสครบ 10 เควส"
        type str "ประเภทของเงื่อนไข เช่น Count, Exp, Coin"
    }

    UserStatistic {
        id int "รหัสประจำสถิติ"
        total_exp int "Exp รวมทั้งหมด"
        total_coin int "Coin รวมทั้งหมด"
        total_quests int "จำนวนเควสที่ทำสำเร็จ"
        total_achievements int "จำนวนความสำเร็จที่ได้รับ"
        user_id int "เชื่อมโยงกับ User"
    }

    CharacterStatistic {
        id int "รหัสประจำสถิติ"
        total_work int "จำนวนงานที่ทำสำเร็จ"
        total_task int "จำนวนภารกิจที่ทำสำเร็จ"
        total_quests int "จำนวนเควสที่ทำสำเร็จ"
        total_achievements int "จำนวนความสำเร็จที่ได้รับ"
        character_id int "เชื่อมโยงกับ Character"
    }

    User ||--|{ Character : "owns"
    Character ||--|{ Work : "manages"
    Character ||--|| Attribute : "has"
    Work ||--|{ Task : "contains"
   
    Character ||--|{ Quest : "undertakes"
    Character ||--|{ Achievement : "earns"
    Quest ||--|| Reward : "gives"
    Achievement ||--|| Reward : "gives"
    Achievement ||--|| Condition : "based_on"
    User ||--|| UserStatistic : "has"
    Character ||--|| CharacterStatistic : "has"

```

ในการออกแบบ Issues สำหรับ Backend ของโปรเจกต์นี้ ผมจะช่วยแบ่งงานออกเป็นหลาย Issues ตามฟังก์ชันหลักที่ต้องพัฒนา โดยจะรวมถึงการจัดการผู้ใช้, การจัดการตัวละคร, การจัดการงานและภารกิจ, และการจัดการระบบโฟกัส รวมทั้งการทดสอบระบบแต่ละส่วนด้วย

### **Issue Template**

ใช้ Template นี้เพื่อสร้าง Issues แต่ละรายการใน GitHub:

```plaintext
### Description
[ใส่รายละเอียดของงานที่ต้องทำ]

### Acceptance Criteria
- [ ] [เกณฑ์การยอมรับงานเมื่อทำเสร็จ]

### Tasks
- [ ] [รายการงานย่อยที่จะต้องทำ]

### Notes
[ใส่รายละเอียดเพิ่มเติม เช่น ข้อมูลอ้างอิง, เอกสารที่เกี่ยวข้อง]

### Labels
[ใส่ label เช่น `Backend`, `Bug`, `Enhancement`, `Documentation`]
```

### **Issues สำหรับ Backend**

#### **1. User System: Registration & Authentication**

**Description:** พัฒนา API สำหรับการลงทะเบียนและเข้าสู่ระบบผู้ใช้

**Acceptance Criteria:**

- [X] ผู้ใช้สามารถลงทะเบียนด้วยอีเมล, username, และ password
- [X] ผู้ใช้สามารถเข้าสู่ระบบด้วยอีเมลหรือ username และ password
- [X] ระบบทำการเข้ารหัส password ก่อนเก็บลงฐานข้อมูล

**Tasks:**

- [X] สร้างโครงสร้างฐานข้อมูลสำหรับผู้ใช้
- [X] พัฒนา API สำหรับการลงทะเบียน (`/register`)
- [X] พัฒนา API สำหรับการเข้าสู่ระบบ (`/login`)
- [X] การจัดการ session หรือ JWT สำหรับการรักษาความปลอดภัย

**Labels:** `Backend`, `Authentication`

#### **2. User System: Profile Management**

**Description:** พัฒนา API สำหรับการจัดการข้อมูลโปรไฟล์ผู้ใช้

**Acceptance Criteria:**

- [X] ผู้ใช้สามารถดูข้อมูลโปรไฟล์ของตนเอง
- [ ] ผู้ใช้สามารถอัปเดตข้อมูลโปรไฟล์ เช่น username, email
- [ ] ผู้ใช้สามารถเปลี่ยนรหัสผ่าน

**Tasks:**

- [X] พัฒนา API สำหรับการดูโปรไฟล์ (`/profile`)
- [ ] พัฒนา API สำหรับการอัปเดตโปรไฟล์ (`/profile/update`)
- [ ] พัฒนา API สำหรับการเปลี่ยนรหัสผ่าน (`/profile/change-password`)

**Labels:** `Backend`, `Profile Management`

#### **3. Character System: Character Creation**

**Description:** พัฒนา API สำหรับการสร้างและจัดการตัวละครของผู้ใช้

**Acceptance Criteria:**

- [X] ผู้ใช้สามารถสร้างตัวละครได้สูงสุด 3 ตัว
- [X] ตัวละครมีค่าเริ่มต้นเช่น exp, level, coin, health, stamina, focus point
- [ ] ตรวจสอบว่าไม่มีการสร้างตัวละครเกิน 3 ตัว

**Tasks:**

- [X] สร้างโครงสร้างฐานข้อมูลสำหรับตัวละคร
- [X] พัฒนา API สำหรับการสร้างตัวละคร (`/character/create`)
- [X] พัฒนา API สำหรับการดูตัวละคร (`/character/list`)
- [X] พัฒนา API สำหรับการอัปเดตข้อมูลตัวละคร (`/character/update`)

**Labels:** `Backend`, `Character Management`

#### **4. Character System: Level Up & Spacial Points**

**Description:** พัฒนา API สำหรับการเลเวลอัพตัวละครและการอัปเดตค่า Spacial Points

**Acceptance Criteria:**

- [ ] ตัวละครจะได้รับ exp เมื่อทำภารกิจเสร็จสมบูรณ์
- [ ] เมื่อเลเวลอัพ ตัวละครจะได้รับ Spacial Points เพื่อเพิ่มค่า stat
- [ ] API สำหรับอัปเดต Spacial Points จะส่งผลต่อความสามารถของตัวละคร

**Tasks:**

- [ ] พัฒนา API สำหรับการเลเวลอัพตัวละคร (`/character/level-up`)
- [ ] พัฒนา API สำหรับการจัดการ Spacial Points (`/character/spacial`)

**Labels:** `Backend`, `Leveling`, `Enhancement`

#### **5. Work System: Work & Task Management**

**Description:** พัฒนา API สำหรับการจัดการงาน (Work) และภารกิจ (Task)

**Acceptance Criteria:**

- [X] ผู้ใช้สามารถสร้างงานได้สูงสุด 3 งาน
- [X] แต่ละงานสามารถมีภารกิจย่อยได้สูงสุด 10 ภารกิจ
- [X] การจัดการวันเริ่มต้น, วันสิ้นสุด, และความยากของภารกิจ

**Tasks:**

- [X] สร้างโครงสร้างฐานข้อมูลสำหรับงานและภารกิจ
- [X] พัฒนา API สำหรับการสร้างงาน (`/work/create`)
- [X] พัฒนา API สำหรับการสร้างภารกิจ (`/work/:workId/task/create`)
- [X] พัฒนา API สำหรับการอัปเดตสถานะภารกิจ (`/task/update-status`)

**Labels:** `Backend`, `Work Management`

#### **6. Work System: Exp & Coin Rewards**

**Description:** พัฒนา API สำหรับการให้รางวัล exp และ coin หลังจากการเสร็จสิ้นภารกิจ

**Acceptance Criteria:**

- [ ] ระบบจะให้ exp และ coin เมื่อทำภารกิจเสร็จสิ้น
- [ ] ระบบจะให้ exp จำนวนมากขึ้นเมื่อทำงานทั้งหมดเสร็จสิ้น
- [ ] การคำนวณรางวัลจะขึ้นอยู่กับความยากและจำนวนงานที่ทำเสร็จ

**Tasks:**

- [ ] พัฒนา API สำหรับการให้รางวัลเมื่อทำภารกิจเสร็จ (`/task/:taskId/complete`)
- [ ] พัฒนา API สำหรับการให้รางวัลเมื่อทำงานทั้งหมดเสร็จ (`/work/:workId/complete`)

**Labels:** `Backend`, `Reward System`

#### **7. Focus Mode System: Focus Mode Activation**

**Description:** พัฒนา API สำหรับการเปิดและปิดโหมดโฟกัส และการจัดการ Focus Points

**Acceptance Criteria:**

- [ ] ผู้ใช้สามารถเปิดโหมดโฟกัสสำหรับการทำงานได้
- [ ] ระบบจะคำนวณค่า Focus Points ที่ใช้งานและส่งผลต่อสถิติของตัวละคร
- [ ] การปิดโหมดโฟกัสจะอัปเดตสถานะงานและภารกิจ

**Tasks:**

- [ ] สร้างโครงสร้างฐานข้อมูลสำหรับโหมดโฟกัส
- [ ] พัฒนา API สำหรับการเปิดโหมดโฟกัส (`/focus/start`)
- [ ] พัฒนา API สำหรับการปิดโหมดโฟกัส (`/focus/end`)

**Labels:** `Backend`, `Focus Mode`

#### **8. Item System: Coin & Item Purchase**

**Description:** พัฒนา API สำหรับการซื้อไอเท็มด้วย coin

**Acceptance Criteria:**

- [ ] ผู้ใช้สามารถใช้ coin ที่ได้รับมาซื้อไอเท็มได้
- [ ] ระบบจะตรวจสอบว่า coin เพียงพอต่อการซื้อไอเท็มหรือไม่
- [ ] รายการไอเท็มจะถูกจัดเก็บในข้อมูลตัวละคร

**Tasks:**

- [ ] สร้างโครงสร้างฐานข้อมูลสำหรับไอเท็ม
- [ ] พัฒนา API สำหรับการซื้อไอเท็ม (`/item/purchase`)
- [ ] พัฒนา API สำหรับการดูรายการไอเท็ม (`/item/list`)

**Labels:** `Backend`, `Item System`

#### **9. Achievement System: Daily & Weekly Quests**

**Description:** พัฒนา API สำหรับการจัดการเควสประจำวันและประจำสัปดาห์

**Acceptance Criteria:**

- [ ] ผู้ใช้สามารถเข้าร่วมเควสประจำวันและสัปดาห์ได้
- [X] ระบบจะตรวจสอบเงื่อนไขความสำเร็จและมอบรางวัลเมื่อเควสสำเร็จ
- [ ] เควสจะรีเฟรชทุกวันและสัปดาห์

**Tasks:**

- [X] สร้างโครงสร้างฐานข้อมูลสำหรับเควส
- [ ] พัฒนา API สำหรับการสร้างและจัดการเควส (`/quest/daily`, `/quest/weekly`)
- [ ] พัฒนา API สำหรับการตรวจสอบเงื่อนไขความสำเร็จ (`/quest/check`)

**Labels:** `Backend`, `Achievement System`

#### **10. Analytics System: User & Character Statistics**

**Description:** พัฒนา API สำหรับการเก็บสถิติผู้ใช้และตัวละครเพื่อดูภาพรวมของระบบ

**Acceptance Criteria:**

- [X] ระบบจะเก็บข้อมูลสถิติ เช่น เวลาที่ใช้ในโหมดโฟกัส, จำนวนงานที่ทำเสร็จ, จำนวนเควสที่สำเร็จ
- [X] ผู้ใช้สามารถดูสถิติโดยรวมของตนเองและตัวละครได้

**Tasks:**

- [X] สร้างโครงสร้างฐานข้อมูลสำหรับสถิติ
- [X] พัฒนา API สำหรับการดูสถิติผู้ใช้ (`/stats/user`)
- [X] พัฒนา API สำหรับการดูสถิติตัวละคร (`/stats/character`)

**Labels:** `Backend`, `Analytics`

#### **11. Testing & Documentation**

**Description:** การทดสอบและเอกสารประกอบระบบ

**Acceptance Criteria:**

- [ ] ทุก API มีการทดสอบการทำงานอย่างสมบูรณ์ (unit test, integration test)
- [ ] มีการสร้างเอกสารการใช้งาน API ที่ครอบคลุมทุกส่วน

**Tasks:**

- [ ] สร้าง test

 cases สำหรับแต่ละ API

- [ ] พัฒนา unit tests และ integration tests
- [ ] เขียนเอกสาร API โดยละเอียด

**Labels:** `Backend`, `Testing`, `Documentation`

---

การแบ่ง Issues เหล่านี้จะช่วยให้การพัฒนา Backend ของโปรเจกต์เป็นระบบและสามารถติดตามความคืบหน้าได้ง่ายขึ้นครับ

### UI Flow Design for To-Do List Application with RPG System

1. **Login/Registration UI**

   - **Login Screen:** Fields for Username/Email and Password, along with buttons for "Login" and "Register."
   - **Registration Screen:** Fields for Username, Email, Password, and a "Register" button.
   - **Forgot Password Screen:** Option to reset the password via email.
2. **Main Dashboard UI**

   - **User Info Section:** Display user's name, email, total EXP, and level.
   - **Character Selection:** Interface to select or create up to 3 characters. Shows basic stats for each character (name, level, health, stamina).
   - **Quick Access Menu:** Shortcuts to Daily/Weekly Quests, Achievements, and Shop.
3. **Character Management UI**

   - **Character Creation Screen:** Fields for character name and initial stat allocation (str, int, end, agi, dex).
   - **Character Overview Screen:** Detailed stats, equipped items, EXP bar, and buttons for "Upgrade" and "View Stats."
   - **Character Upgrade UI:** Allows allocation of earned points to different stats (strength, intelligence, endurance, agility, dexterity).
4. **Work Management UI**

   - **Work List Screen:** Displays active works, with the ability to create a new work or delete existing ones.
   - **Work Detail Screen:** Shows work details (name, description, start date, due date) and lists associated tasks.
5. **Task Management UI**

   - **Task List Screen:** Display tasks under a specific work, with options to create, edit, or delete tasks.
   - **Task Detail Screen:** Shows task details (name, description, difficulty, start date, due date) and status (completed/not completed).
6. **Focus Mode UI**

   - **Focus Mode Activation Screen:** Option to activate Focus Mode, showing current focus points.
   - **Focus Mode Screen:** A minimalist UI with a timer, task progress, and remaining focus points.
7. **Daily/Weekly Quests UI**

   - **Quest List Screen:** Displays active daily/weekly quests with descriptions and rewards.
   - **Quest Completion Screen:** Summary of completed quests and rewards earned (EXP, coins, items).
8. **Shop UI**

   - **Shop Screen:** Displays items available for purchase, including their cost and effects.
   - **Inventory Screen:** Shows owned items and options to equip/use them.
9. **Achievement UI**

   - **Achievement List Screen:** Displays a list of achievements with their status (completed/incomplete).
   - **Achievement Detail Screen:** Shows the progress towards specific achievements and the rewards earned upon completion.
10. **Statistics UI**

    - **User Stats Screen:** Displays overall statistics like total tasks completed, total EXP, total coins earned.
    - **Character Stats Screen:** Displays detailed statistics for each character, such as total work completed, level progress, and focus point usage.
11. **Settings UI**

    - **General Settings:** Options for notifications, sound, and language preferences.
    - **Account Settings:** Options to change password, email, or delete account.

### Navigation Flow

- **Login/Registration -> Main Dashboard**
- **Main Dashboard -> Character Management / Work Management / Daily Quests / Shop / Achievements / Stats / Settings**
- **Work Management -> Task Management -> Task Details**
- **Character Management -> Character Overview -> Character Upgrade**
- **Shop -> Purchase Confirmation -> Inventory**
- **Focus Mode -> Work/Task Screen**

This flow ensures all requirements are covered, providing easy access to key features while maintaining a clean and organized UI structure.
