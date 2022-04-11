## add context

1. create store/authContext.js
2. const AuthContext = React.createContext(<initValues>)
3. export AuthContext
4. apjuosti el kurie gales naudoti reiksmes is contexto su <AuthContext.Provider>
5. <AuthContext.Provider value={}> value yra kas gaunama vaikiniuose komponentuose.
6. Komponente kuriame norim pasiimti value
   6.1 const ctx = useContext(AuthContext) ir tada ctx === value
   6.2 jei value={login, logout} tai tada ctx.login() arba ctx.loguot()
