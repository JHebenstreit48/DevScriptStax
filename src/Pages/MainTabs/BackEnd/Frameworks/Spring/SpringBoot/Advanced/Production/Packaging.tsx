import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Packaging = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Advanced/Production/Packaging';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Packaging (Jar/War)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Packaging;
