function solution(phone_number) {
    const prefix = phone_number.substr(0, phone_number.length - 4)
    return phone_number.replace(prefix, "*".repeat(prefix.length))
}

/* 폰번호가 11자리든 10자리든 뒤에 4자리만 남겨놓기위해 phone_number.length를 썼으며,
이 prefix변수를 *으로 변환시켜주는 replace함수와 이 *을 prefix길이만큼 다 바꿔주기위해 repeat함수를 씀. */