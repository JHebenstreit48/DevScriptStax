import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ValidationAndBinding = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Basics/WebMVC/ValidationAndBinding';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Validation & Binding" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ValidationAndBinding;
