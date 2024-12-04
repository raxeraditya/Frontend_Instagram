import React, { useState, useRef } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreatePostModal = ({ isOpen, onClose }: CreatePostModalProps) => {
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShare = () => {
    if (selectedImage && caption) {
      // Handle post creation
      console.log('Creating post:', { image: selectedImage, caption });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-lg w-full">
        <div className="border-b p-4 flex justify-between items-center">
          <h2 className="font-semibold">Create new post</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4">
          {!selectedImage ? (
            <div 
              className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <ImageIcon className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 mb-4">Drag photos and videos here</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Select from computer
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageSelect}
                accept="image/*"
                className="hidden"
              />
            </div>
          ) : (
            <div className="space-y-4">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-64 object-cover rounded"
              />
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Write a caption..."
                className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
                rows={4}
              />
              <button 
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={handleShare}
              >
                Share
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};