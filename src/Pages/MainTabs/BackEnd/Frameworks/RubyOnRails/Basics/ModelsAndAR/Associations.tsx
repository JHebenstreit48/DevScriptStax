import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Associations = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/ModelsAndAR/Associations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Associations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Associations;
