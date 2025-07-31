import {Button} from '@/components/ui/button'

export const CTASection = () => {
  return (
	  <section
		  className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-500 to-pink-500 flex justify-center">
		  <div className="container px-4 md:px-6">
			  <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
				  <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Bounce?</h3>
				  <p className="mx-auto max-w-[600px] text-orange-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
					  Dont miss out on Balis biggest bounce experience. Book your tickets now and get ready
					  for an
					  unforgettable adventure!
				  </p>
				  <div className="flex flex-col sm:flex-row gap-4">
					  <Button size="lg"
							  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
						  Book Tickets Now
					  </Button>
				  </div>
			  </div>
		  </div>
	  </section>
  )
};