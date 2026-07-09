import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TypesAndEnums = () => {
  const markdownFilePath = 'Languages/Rust/Basics/Fundamentals/TypesAndEnums';

  return (
    <>
      <PageLayout>
        <PageTitle title="Types & Enums" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypesAndEnums;
