function EmptyFields({textError}) {
  return (
    <div className="w-full bg-[#FF3030]/30 text-white font-poppins font-semibold mb-6 text-center py-3 rounded-lg">
      {textError}
    </div>
  );
}

export default EmptyFields;
