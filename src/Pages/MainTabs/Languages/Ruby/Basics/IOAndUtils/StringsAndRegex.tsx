import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StringsAndRegex = () => {
  const markdownFilePath = 'Languages/Ruby/Basics/IOAndUtils/StringsAndRegex';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Strings & Regex" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StringsAndRegex;
