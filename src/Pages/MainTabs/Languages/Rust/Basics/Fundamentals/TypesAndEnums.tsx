import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TypesAndEnums = () => {
  const markdownFilePath = 'Languages/Rust/Basics/Fundamentals/TypesAndEnums';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Types & Enums" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypesAndEnums;
