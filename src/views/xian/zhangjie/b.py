
Procedure printO();
Begin
    P(ah);
    cprint('O')i
    V(o);
End

Procedure printS();
Begin
    P(o);
    cprint('S')片
End

Begin
    /*主程序创建5个进程*/
    Parbegin
        printW();/创建输出'我'字的进程*/
        printA();/创建输出'爱'字的进程*/
        printH();/创建输出'恨'字的进程*/
        printO();/怆创建输出'O'字的进程*/
        printS();/怆创建输出'S'字的进程*/
    Parend
End