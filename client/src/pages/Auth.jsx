import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Separator } from "../components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: ''
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  const handleGoogleSignIn = () => {
    setIsLoading(true)
    // Simulate Google sign-in
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="fixed inset-0 w-screen h-screen grid lg:grid-cols-2 overflow-hidden">
      <div className="relative h-full flex-col p-10 text-white lg:flex overflow-hidden hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/20 to-blue-600/30" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-40 left-32 w-40 h-40 bg-blue-300/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-20 flex items-center text-lg font-medium">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-blue-700 font-bold text-sm">SS</span>
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent">
              StreamSavvy
            </span>
          </div>
        </div>

        <div className="relative z-20 flex-1 flex items-center justify-center">
          <div className="text-center space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/50"></div>
                <div className="absolute inset-4 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-lg border border-white/20">
                  <div className="absolute inset-6 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full"></div>
                  <div className="relative w-48 h-48 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <div className="text-6xl">
                      🚀
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold text-white">
                  Welcome to StreamSavvy
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
                <p className="text-blue-100 max-w-md mx-auto">
                  Streamline your client management workflow with our powerful platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 bg-white h-full overflow-y-auto ">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] border border-blue-600 rounded-lg p-6">
          <div className="flex flex-col space-y-2 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                  StreamSavvy
                </span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Sign In</TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                    Login to StreamSavvy
                  </h1>
                  <p className="text-gray-600 text-sm">
                    Access your dashboard and manage your clients
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border border-gray-300 rounded-lg px-4 py-3"
                  />
                  
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="border bordexr-gray-300 rounded-lg px-4 py-3"
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In with Email"}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="flex items-center justify-center w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
                  disabled={isLoading}
                >
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  <span className="ml-2">
                    {isLoading ? "Signing in..." : "Sign in with Google"}
                  </span>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="register">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                    Create an account
                  </h1>
                  <p className="text-gray-600 text-sm">
                    Enter your details below to create your account
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="border border-gray-300 rounded-lg px-4 py-3"
                    />
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="border border-gray-300 rounded-lg px-4 py-3"
                    />
                  </div>
                  
                  <Input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border border-gray-300 rounded-lg px-4 py-3"
                  />
                  
                  <Input
                    type="password"
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="border border-gray-300 rounded-lg px-4 py-3"
                  />
                  
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="border border-gray-300 rounded-lg px-4 py-3"
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="flex items-center justify-center w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
                  disabled={isLoading}
                >
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  <span className="ml-2">
                    {isLoading ? "Signing up..." : "Sign up with Google"}
                  </span>
                </Button>

                <p className="text-center text-xs text-gray-500">
                  By clicking continue, you agree to our{" "}
                  <Link to="/terms" className="underline hover:text-gray-700">Terms of Service</Link>
                  {" "}and{" "}
                  <Link to="/privacy" className="underline hover:text-gray-700">Privacy Policy</Link>.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
