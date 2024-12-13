# **Closure ва Recursion дар JavaScript**

## **1. Closure**

**Closure чист?**  
Closure — ин механизме дар JavaScript мебошад, ки ба функсияҳо имкон медиҳад дастрасӣ ба тағйирёбандаҳое, ки дар муҳити (scope) берунии онҳо муайян шудаанд, нигоҳ дорад, ҳатто пас аз анҷоми иҷрои функсияи беруна. Closure ба функсияҳо имкон медиҳад, ки "хотира" дошта бошанд ва тағйирёбандаҳои муҳити беруниро нигоҳ доранд.  

**Чӣ тавр Closure кор мекунад?**  
- Агар функсия дар дохили функсияи дигар эълон шавад, функсияи дохилӣ ба тағйирёбандаҳои функсияи беруна дастрасӣ дорад.  
- Пас аз анҷом ёфтани функсияи беруна, функсияи дохилӣ ҳанӯз ҳам метавонад ин тағйирёбандаҳоро истифода барад.  
- Closure барои сохтани функсияҳои калбакӣ (callback), таймерҳо (timers) ва модулҳо (modules) муфид аст.
# **Recursion дар JavaScript**

**1. Recursion чист?**  
Recursion — ин усули занг задани функсия ба худи худ мебошад. Ҳар як занг мушкилро ба зермушкилҳои соддатар тақсим мекунад. Рекурсия одатан барои ҳалли масъалаҳое, ки сохтори такрорӣ доранд, истифода мешавад.  

**2. Чӣ тавр Recursion кор мекунад?**  
- **Пойгоҳи қатъшавӣ (Base Case):** Ин шарте мебошад, ки рекурсиятро қатъ мекунад. Агар пойгоҳи қатъшавӣ вуҷуд надошта бошад, зангҳои беохир ба миён меоянд.  
- **Қадами такрорӣ (Recursive Step):** Қисме аз функсия, ки занг ба худи функсияро таъмин мекунад, аммо бо аргументи хурдтар ё соддатар.  

**Мисол (Closure дар JavaScript):**  
```javascript
function counter() {
  let count = 0; // Ин тағйирёбанда дар муҳити берунии функсия нигоҳ дошта мешавад
  return function() {
    count++;
    return count;
  };
}

const counter1 = counter(); 
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = counter(); 
console.log(counter2()); // 1 (барои counter2 тағйирёбандаи count аз нав эҷод мешавад)
```

**3. Мисол (Recursion барои ҳисоб кардани факториал):**  
```javascript
function factorial(n) {
  if (n === 0) { 
    return 1; // Пойгоҳи қатъшавӣ
  }
  return n * factorial(n - 1); // Қадами такрорӣ (занг ба худи функсия)
}

const natija = factorial(5); // 5 * 4 * 3 * 2 * 1 = 120
console.log(natija); // 120
```
![](https://files.oaiusercontent.com/file-9i3TNzyaocAvjfqAUJdfzh?se=2024-12-13T11%3A22%3A43Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd4c4f87c-7ce5-43e4-b362-bad4540215e3.webp&sig=UFvv9a25%2B/IUCgfmwR6bgRpcMhbCOS7uPfALn1BC%2BRg%3D)
