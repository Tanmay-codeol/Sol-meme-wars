// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { Upload, Tag, Plus, Camera } from 'lucide-react';

// interface FormDataType {
//   name: string;
//   description: string;
//   price: string;
//   collection: string;
//   tags: string[];
//   properties: Array<{
//     trait_type: string;
//     value: string;
//   }>;
// }

// interface NFTImageType {
//   file: File | null;
//   previewUrl: string | null;
// }

// interface CollectionOption {
//   value: string;
//   label: string;
// }

// const COLLECTION_OPTIONS: CollectionOption[] = [
//   { value: 'pepe', label: 'Pepe Collection' },
//   { value: 'cyber', label: 'Cyber Collection' },
//   { value: 'pixel', label: 'Pixel Collection' },
// ];

// const AddNFTPage: React.FC = () => {
//   const [nftImage, setNftImage] = useState<NFTImageType>({
//     file: null,
//     previewUrl: null
//   });
//   const [formData, setFormData] = useState<FormDataType>({
//     name: '',
//     description: '',
//     price: '',
//     collection: '',
//     tags: [],
//     properties: []
//   });
//   const [currentTag, setCurrentTag] = useState<string>('');
  
//   const handleImageUpload = (e: ChangeEvent<HTMLInputElement>): void => {
//     const file = e.target.files?.[0];
//     if (file) {
//       // Store both the file and create a preview URL
//       setNftImage({
//         file,
//         previewUrl: URL.createObjectURL(file)
//       });
//     }
//   };

//   const removeImage = (): void => {
//     // Clean up the preview URL to prevent memory leaks
//     if (nftImage.previewUrl) {
//       URL.revokeObjectURL(nftImage.previewUrl);
//     }
//     setNftImage({
//       file: null,
//       previewUrl: null
//     });
//   };
 
//   const handleSubmit = async (e: FormEvent): Promise<void> => {
//     e.preventDefault();
    
//     try { 
//       removeImage();
      
//     } catch (error) {
//       console.error('Error creating NFT:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 p-8">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-white mb-8 font-mono">Create New NFT</h1>
        
//         <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg border border-gray-700 p-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Image Upload Section */}
//             <div className="space-y-4">
//               <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
//                 NFT Image
//               </label>
//               <div className={`border-2 border-dashed border-gray-600 rounded-lg p-4 
//                 ${nftImage.previewUrl ? 'bg-gray-700' : 'bg-gray-800'} 
//                 hover:border-green-400 transition-colors duration-200`}>
//                 {nftImage.previewUrl ? (
//                   <div className="relative">
//                     <img 
//                       src={nftImage.previewUrl} 
//                       alt="NFT Preview" 
//                       className="w-full h-64 object-contain rounded"
//                     />
//                     <button 
//                       type="button"
//                       onClick={removeImage}
//                       className="absolute top-2 right-2 bg-gray-800 p-1 rounded-full"
//                     >
//                       <Plus className="h-5 w-5 text-white transform rotate-45" />
//                     </button>
//                   </div>
//                 ) : (
//                   <label className="flex flex-col items-center justify-center h-64 cursor-pointer">
//                     <Camera className="h-12 w-12 text-gray-400 mb-4" />
//                     <span className="text-gray-400 font-mono">Click to upload or drag and drop</span>
//                     <span className="text-sm text-gray-500 font-mono mt-2">PNG, JPG, GIF up to 10MB</span>
//                     <input
//                       type="file"
//                       className="hidden"
//                       onChange={handleImageUpload}
//                       accept="image/*"
//                     />
//                   </label>
//                 )}
//               </div>
//             </div>

//             {/* Rest of the form remains the same */}
//             {/* ... Previous form fields code ... */}
//           </div>

//           {/* Submit Button */}
//           <div className="mt-8">
//             <button
//               type="submit"
//               className="w-full flex items-center justify-center px-4 py-3 bg-green-400 text-gray-900 rounded-md hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-800 font-mono"
//               disabled={!nftImage.file}
//             >
//               <Upload className="mr-2 h-5 w-5" />
//               Create NFT
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddNFTPage;