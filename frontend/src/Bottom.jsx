import { FiPhoneCall } from 'react-icons/fi';
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import { TbBrandMeta } from 'react-icons/tb';


const Bottom = () => {
  return (
    <footer className='border-t py-10 bg-gray-100'>
      <div className='container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-8'>
        {/* About Section */}
        <div>
          <h3 className='text-lg text-gray-800 mb-4 font-semibold'>About Us</h3>
          <p className='text-gray-600 text-sm'>
            CompileTab is your one-stop shop for quality fashion wear. Stay trendy, stay stylish with us.
          </p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className='text-lg text-gray-800 mb-4 font-semibold'>Stay Updated</h3>
          <p className='text-gray-600 text-sm mb-4'>
            Subscribe to our newsletter to get the latest trends and offers directly in your inbox.
          </p>
          <form className='flex flex-col'>
            <input
              type='email'
              placeholder='Enter your email'
              className='p-2 mb-4 border border-gray-300 rounded'
            />
            <button type='submit' className='bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors'>
              Subscribe
            </button>
          </form>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className='text-lg text-gray-800 mb-4 font-semibold'>Connect With Us</h3>
          <div className='flex items-center space-x-4 mb-4'>
            <a href='https://www.meta.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-500'>
              <TbBrandMeta className='h-5 w-5' />
            </a>
            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-500'>
              <IoLogoInstagram className='h-5 w-5' />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-500'>
              <RiTwitterXLine className='h-5 w-5' />
            </a>
          </div>
          <p className='text-gray-600 text-sm'>Call Us</p>
          <p className='text-gray-700 text-sm flex items-center mt-1'>
            <FiPhoneCall className='inline-block mr-2' />
            +91 7550177315
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className='container mx-auto mt-10 px-4 lg:px-0 border-t border-gray-300 pt-6'>
        <p className='text-gray-500 text-sm text-center tracking-tight'>&copy; 2025 CompileTab. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Bottom;
